
			// this script exists to load the changelogs
			const contentDiv = document.getElementById('markdown-content');

			fetch('./Changelogs.md')
				.then(response => {
					if (!response.ok) {
						throw new Error(`Failed to load file: ${response.statusText}`);
					}
					return response.text();
				})
				.then(markdownText => {
					contentDiv.innerHTML = marked.parse(markdownText);
				})
				.catch(error => {
					console.error('Error rendering markdown:', error);
					contentDiv.innerHTML = '<p style="color: red;">Error loading changelogs.</p>';
				});
		