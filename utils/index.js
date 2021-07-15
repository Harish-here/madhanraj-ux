export const injectStyle = (src) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = src;
  const head = document.querySelector("head");
  head.appendChild(link);
};

export const injectScriptGTM = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-TWJCG7XR76');
  }
  const head = document.querySelector("head");
  head.appendChild(script);
}
