
			// this script redirects the user to the version specific changelog page if they put a release at the end of the link
			const params = new URLSearchParams(window.location.search);
			const version = params.get("v");

			if (version) {
				window.location.replace(`https://ceedoku.github.io/changelog/release?v=${encodeURIComponent(version)}`);
			};
		