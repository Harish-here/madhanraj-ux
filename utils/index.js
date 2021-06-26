export const injectStyle = (src) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = src;
  const head = document.querySelector("head");
  head.appendChild(link);
};
