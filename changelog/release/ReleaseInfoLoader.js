
			// this script loads the release info page if ?v=an_actual_release_number
			async function loadReleaseChangelog() {

				const params = new URLSearchParams(window.location.search);
				const requestedVersion = params.get("v");

				if (!requestedVersion) {
					window.location.replace("https://ceedoku.github.io/changelog");
					return;
				}

				const version = requestedVersion.replace(/^v/i, "");

				const url =
					version.toLowerCase() === "latest"
						? "https://api.github.com/repos/ceebug/Ceedoku/releases/latest"
						: `https://api.github.com/repos/ceebug/Ceedoku/releases/tags/v${encodeURIComponent(version)}`;

				try {

					const response = await fetch(url);

					if (!response.ok) {
						window.location.replace("https://ceedoku.github.io/changelog");
						return;
					}

					const release = await response.json();
					const markdownContent = document.getElementById("markdown-content");
					const heading = document.querySelector(".about-container > h2");
					const releaseVersion = release.name.replace(/^Ceedoku\s+/i, "");

					if (heading) {
						heading.textContent =
							`Version ${releaseVersion}`;
					}
					
					document.title = `Ceedoku ΓÇó Changelogs - Version ${releaseVersion}`

					markdownContent.classList.add("something");

					const changelog =
						(release.body || "")
							.split(/\r?\n/)
							.slice(1)
							.join("\n");

					markdownContent.innerHTML =
						"<h3>Release Changelog</h3>" +
						marked.parse(changelog);

					const offlineAsset =
						release.assets.find(asset =>
							asset.name.toLowerCase().endsWith(".zip")
						);

					const downloadLink = document.getElementById("downloadboxlink");

					if (downloadLink && offlineAsset) {

						downloadLink.href =
							offlineAsset.browser_download_url;


					} else {
						window.location.replace("https://ceedoku.github.io/changelog");
						return;
					}

				} catch (error) {
					window.location.replace("https://ceedoku.github.io/changelog");
					return;
				}
			}

			loadReleaseChangelog();
		