(() => {
  if (document.getElementById("shared-footer-root")) return;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "/shared/footer/style.css";
  document.head.append(stylesheet);

  fetch("/shared/footer/index.html")
    .then((response) => {
      if (!response.ok) throw new Error("Unable to load the shared footer.");
      return response.text();
    })
    .then((markup) => {
      const root = document.createElement("div");
      root.id = "shared-footer-root";
      root.innerHTML = markup;
      document.body.append(root);
    })
    .catch((error) => console.error(error));
})();
