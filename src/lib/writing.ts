import { readFile } from "node:fs/promises";
import path from "node:path";

export type WritingBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language?: string; code: string }
  | { type: "hr" };

export type WritingDocument = {
  title: string;
  blocks: WritingBlock[];
};

function normalizeInlineWhitespace(text: string) {
  return text.replace(/\s+/gu, " ").trim();
}

function parseMarkdownDocument(markdown: string): WritingDocument {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: WritingBlock[] = [];

  let title = "";
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let codeLanguage: string | undefined;

  const flushParagraph = () => {
    if (!paragraphLines.length) {
      return;
    }

    blocks.push({
      type: "paragraph",
      text: normalizeInlineWhitespace(paragraphLines.join(" ")),
    });
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    blocks.push({ type: "list", items: [...listItems] });
    listItems = [];
  };

  const flushCode = () => {
    if (!codeLines.length && !codeLanguage) {
      return;
    }

    blocks.push({
      type: "code",
      language: codeLanguage,
      code: codeLines.join("\n"),
    });
    codeLines = [];
    codeLanguage = undefined;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (codeLanguage !== undefined) {
      if (trimmed.startsWith("```")) {
        flushCode();
      } else {
        codeLines.push(line);
      }
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed === "---") {
      flushParagraph();
      flushList();
      blocks.push({ type: "hr" });
      continue;
    }

    if (trimmed.startsWith("```")) {
      flushParagraph();
      flushList();
      codeLanguage = trimmed.slice(3).trim() || undefined;
      codeLines = [];
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.+)$/u.exec(trimmed);
    if (headingMatch) {
      flushParagraph();
      flushList();

      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/\*\*/gu, "").trim();

      if (level === 1 && !title) {
        title = text;
      } else {
        blocks.push({
          type: "heading",
          level: Math.min(Math.max(level, 2), 4) as 2 | 3 | 4,
          text,
        });
      }

      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      listItems.push(trimmed.slice(2).trim());
      continue;
    }

    paragraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushCode();

  return { title, blocks };
}

export async function getWritingDocument(slug: string): Promise<WritingDocument> {
  const filePath = path.join(process.cwd(), "content", "writing", `${slug}.md`);
  const source = await readFile(filePath, "utf8");
  return parseMarkdownDocument(source);
}
