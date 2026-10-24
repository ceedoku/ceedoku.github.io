(() => {
  const links = [
    ["Home", "/home"],
    ["Feedback", "/feedback"],
    ["About", "/about"],
    ["Download", "/download"],
    ["Install", "/install"],
    ["Changelog", "/changelog"]
  ];
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const activePath = currentPath.startsWith("/changelog/release")
    ? "/changelog"
    : currentPath;
  const linkMarkup = links.map(([label, href]) => {
    const current = activePath === href ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  const nav = document.createElement("div");
  nav.id = "site-navbar";
  nav.innerHTML = `
    <header class="site-titlebar">
      <a class="site-brand" href="/home" aria-label="Ceedoku home">
        <img src="/title.png" alt="Ceedoku">
      </a>
      <nav class="site-nav-links" aria-label="Main navigation">${linkMarkup}</nav>
    </header>
    <button class="site-menu-button" type="button" aria-label="Open navigation menu"
      aria-controls="site-mobile-sidebar" aria-expanded="false">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
    <div class="site-sidebar-backdrop" aria-hidden="true"></div>
    <nav class="site-mobile-sidebar" id="site-mobile-sidebar" aria-label="Mobile navigation"
      aria-hidden="true" inert>
      <div class="site-sidebar-top">
        <a href="/home" aria-label="Ceedoku home"><img src="/title.png" alt="Ceedoku"></a>
        <button class="site-sidebar-close" type="button" aria-label="Close navigation menu">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round"><path d="m18 6-12 12M6 6l12 12"/></svg>
        </button>
      </div>
      ${linkMarkup}
    </nav>`;

  document.body.prepend(nav);

  window.setSiteNavbarActive = (href) => {
    nav.querySelectorAll(".site-nav-links a, .site-mobile-sidebar > a").forEach((link) => {
      if (link.getAttribute("href") === href) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };
  window.setSiteNavbarActive(activePath);

  const menuButton = nav.querySelector(".site-menu-button");
  const closeButton = nav.querySelector(".site-sidebar-close");
  const sidebar = nav.querySelector(".site-mobile-sidebar");
  const backdrop = nav.querySelector(".site-sidebar-backdrop");

  function setMenuOpen(open, restoreFocus = true) {
    document.body.classList.toggle("site-nav-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
    sidebar.setAttribute("aria-hidden", String(!open));
    sidebar.inert = !open;
    backdrop.setAttribute("aria-hidden", String(!open));

    if (open) closeButton.focus();
    else if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => setMenuOpen(true));
  closeButton.addEventListener("click", () => setMenuOpen(false));
  backdrop.addEventListener("click", () => setMenuOpen(false));
  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false, false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("site-nav-open")) {
      setMenuOpen(false);
    }
  });
})();