
			// this script sets the size of the download icon
			const downloadIcon = document.getElementById("downloadicon");
			const downloadText = document.getElementById("downloadtext");

			function sizeDownloadIcon() {
				downloadIcon.style.display = "none";

				requestAnimationFrame(() => {
					const height = downloadText.getBoundingClientRect().height;

					downloadIcon.style.height = height + "px";
					downloadIcon.style.width = height + "px";

					downloadIcon.style.display = "flex";
				});
			}

			sizeDownloadIcon();
			window.addEventListener("resize", sizeDownloadIcon);
		