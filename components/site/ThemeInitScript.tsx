import Script from "next/script";

export default function ThemeInitScript() {
  return (
    <Script
      id="theme-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored ? stored : (prefersDark ? "dark" : "light");
    var root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  } catch (e) {}
})();
        `,
      }}
    />
  );
}
