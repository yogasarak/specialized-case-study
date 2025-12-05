Below is the **best way to expand your current case-study image system** so it can support **multiple desktop stages** and **multiple mobile views** while staying fully compatible with your current `CaseStudyView` architecture.

---

# ✅ **The Core Issue**

Your current data model supports:

```
viewOptions: ["Desktop", "Mobile"],
images: {
  Desktop: { ...single image... },
  Mobile: { ...single image... }
}
```

But your new feature flow (Accessory Add-Ons PDP) includes:

- Multiple _desktop_ steps (PDP, accordion expanded, modal open, model closed, cart view, etc.)
- Possibly multiple _mobile_ steps as well
- The need to let the user **toggle** between these stages in the case study UI

Your current UI only toggles between _two_ views—**one Desktop, one Mobile**.

---

# 🚀 **Recommended Upgrade**

## **1. Expand `viewOptions` to be a list of named stages**

Example:

```ts
viewOptions: [
  'Desktop — PDP',
  'Desktop — Expanded Accessories',
  'Desktop — Modal',
  'Mobile — PDP',
  'Mobile — Modal',
]
```

Your toggle bar already maps through `viewOptions`, so this will automatically create a tab for each stage.

---

## **2. Change `images` to accept MANY images keyed by those view options**

Instead of:

```ts
images: {
  Desktop: { ... },
  Mobile: { ... }
}
```

Use:

```ts
images: Record<
  ToggleOption,
  {
    src: string
    alt: string
    width: number
    height: number
  }
>
```

Which supports unlimited steps.

Your current type already allows this _(because `ToggleOption` is simply `string`)_—there’s no need to restructure the React code.

---

# 🧩 **Minimal Change to Your Data Model**

Your model already supports multiple keys without code changes.
What you need is simply **to add more viewOptions and corresponding images**.

---

# ✔️ **Here is the recommended expanded version**

(You can copy/paste this into your case study data.)

```ts
viewOptions: [
  "Desktop — PDP",
  "Desktop — Accessories Expanded",
  "Desktop — Modal Open",
  "Desktop — Updated Cart",
  "Mobile — PDP",
  "Mobile — Accessories",
  "Mobile — Modal",
],

images: {
  "Desktop — PDP": {
    src: "https://supabase-bucket/pdp-step-1.png",
    alt: "Desktop view of the PDP showing compatible accessories module.",
    width: 1600,
    height: 950,
  },
  "Desktop — Accessories Expanded": {
    src: "https://supabase-bucket/pdp-step-2.png",
    alt: "Desktop view with accessories accordion expanded.",
    width: 1600,
    height: 950,
  },
  "Desktop — Modal Open": {
    src: "https://supabase-bucket/pdp-step-3.png",
    alt: "Desktop view of accessory quick-view modal.",
    width: 1600,
    height: 950,
  },
  "Desktop — Updated Cart": {
    src: "https://supabase-bucket/cart-expanded.png",
    alt: "Desktop cart after adding accessories.",
    width: 1600,
    height: 950,
  },
  "Mobile — PDP": {
    src: "https://supabase-bucket/mobile-step-1.png",
    alt: "Mobile PDP layout showing accessory module.",
    width: 375,
    height: 1450,
  },
  "Mobile — Accessories": {
    src: "https://supabase-bucket/mobile-step-2.png",
    alt: "Mobile view with expanded accessory categories.",
    width: 375,
    height: 1450,
  },
  "Mobile — Modal": {
    src: "https://supabase-bucket/mobile-step-3.png",
    alt: "Mobile bottom-sheet-style quick-view modal.",
    width: 375,
    height: 1450,
  },
}
```

---

# 🧠 Why this works perfectly with your current UI code

### Your toggle UI:

```tsx
<ToggleBar>
  {viewOptions.map(option => (
    <ToggleTab
      ...onClick={() => setActiveView(option)}
    >
      {option}
    </ToggleTab>
  ))}
</ToggleBar>
```

### Your image rendering:

```tsx
const activeImage = images[activeView]
```

➡️ **Your system automatically supports an unlimited number of views.**
No code change required.

---

# 🎨 UI / UX Considerations for Many View Tabs

If you plan to show 5–9 image steps, consider:

### Option A — **Scrollable Toggle Bar**

- Keep the tabs
- Allow horizontal scroll (simple CSS)
- Works great on desktop + mobile

### Option B — **Grouped Toggle Bar**

Example:

```
Desktop
   • PDP
   • Expanded
   • Modal
Mobile
   • PDP
   • Modal
```

This would require a small UI update, but it’s much cleaner.

### Option C — **Carousel with arrows**

- Instead of tabs, use "Step 1 / Step 2 / Step 3" with previous/next arrows
- Very intuitive for multi-step flows

If you want, I can design the UX for this.

---

# 📦 Summary of What You Should Do

| Step | Action                                            | Code Change? |
| ---- | ------------------------------------------------- | ------------ |
| 1    | Add more viewOptions                              | No           |
| 2    | Add more image entries keyed to those viewOptions | No           |
| 3    | (Optional) Improve visual layout for many tabs    | Small        |

Your system was built extensibly—so this expansion is easy.

---

# If you want, I can also deliver:

✔️ The **updated complete CaseStudyContentComplex object** including all new images
✔️ A redesigned **multi-stage toggle UI**
✔️ An alternative **step-by-step storyboard viewer**
✔️ A fully responsive **horizontal scroll tab bar** update

Just tell me what you'd like next!
