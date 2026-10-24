
        document.addEventListener("DOMContentLoaded", () => {
            const downloadCard = document.getElementById("downloadcard");
            const featuresCard = document.getElementById("featurescard");

            function updateLinks() {
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

            updateLinks();
        });

    