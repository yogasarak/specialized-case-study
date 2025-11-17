const ICON_PATH = "/favicon.ico";

export default function Head() {
  return (
    <>
      <link rel="icon" href={ICON_PATH} type="image/png" />
      <link rel="shortcut icon" href={ICON_PATH} type="image/png" />
      <link rel="apple-touch-icon" href={ICON_PATH} />
    </>
  );
}
