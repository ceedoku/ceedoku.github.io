
        document.addEventListener("DOMContentLoaded", () => {
            const downloadCard = document.getElementById("downloadcard");
            const featuresCard = document.getElementById("featurescard");
            let anchorNavigationTimer;

            document.addEventListener("site-navbar-anchor-navigation", event => {
                window.siteNavbarAnchorNavigationRoute = event.detail.route;
                window.setSiteNavbarActive(window.siteNavbarAnchorNavigationRoute);
            });

            function updateLinks() {
                if (window.siteNavbarAnchorNavigationRoute) {
                    window.setSiteNavbarActive(window.siteNavbarAnchorNavigationRoute);
                    return;
                }

                const atBottom =
                    window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 1;

                window.setSiteNavbarActive(atBottom ? "/download" : "/about");
            }

            const hash = window.location.hash.toLowerCase();

            if (hash === "#download") {
                downloadCard.classList.add("focus");
            }

            if (hash === "#features") {
                featuresCard.classList.add("focus");
                history.replaceState(null, "", "#features");

                if (window.innerWidth < 700) {
                    window.scrollBy(0, -5);
                }
            }

            function removeFocus() {
                downloadCard.classList.remove("focus");
                featuresCard.classList.remove("focus");

                window.removeEventListener("pointerdown", removeFocus);
                window.removeEventListener("wheel", removeFocus);
                window.removeEventListener("touchstart", removeFocus);
                window.removeEventListener("keydown", removeFocus);
                window.removeEventListener("contextmenu", removeFocus);
                window.removeEventListener("selectstart", removeFocus);
            }

            window.addEventListener("pointerdown", removeFocus);
            window.addEventListener("wheel", removeFocus);
            window.addEventListener("touchstart", removeFocus);
            window.addEventListener("keydown", removeFocus);
            window.addEventListener("contextmenu", removeFocus);
            window.addEventListener("selectstart", removeFocus);

            window.addEventListener("scroll", updateLinks);
            window.addEventListener("resize", updateLinks);

            function finishAnchorNavigation() {
                if (!window.siteNavbarAnchorNavigationRoute) return;
                window.siteNavbarAnchorNavigationRoute = null;
                window.clearTimeout(anchorNavigationTimer);
                updateLinks();
            }

            window.addEventListener("scroll", () => {
                if (!window.siteNavbarAnchorNavigationRoute) return;
                window.clearTimeout(anchorNavigationTimer);
                anchorNavigationTimer = window.setTimeout(finishAnchorNavigation, 700);
            });
            window.addEventListener("scrollend", finishAnchorNavigation);

            updateLinks();
        });

    