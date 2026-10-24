

async function loadLatestRelease() {

    const name =
        document.getElementById("latest-release-name");

    const date =
        document.getElementById("latest-release-date");

    const notes =
        document.getElementById("latest-release-notes");


    try {

        const response = await fetch(
            "https://api.github.com/repos/ceebug/ceedoku/releases/latest"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch latest release.");
        }

        const release =
            await response.json();


        /*
         * Release name
         */

        name.textContent =
            release.tag_name.replace(/^v/, "");


        /*
         * Release date
         */

        if (release.published_at) {

            const releaseDate =
                new Date(release.published_at);

            date.textContent =
                "Released " +
                releaseDate.toLocaleDateString(
                    "en-AU",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );

        } else {

            date.textContent =
                "Release date unavailable";

        }


        /*
         * Release notes
         */

        const body =
            release.body || "";

        notes.innerHTML =
            parseReleaseNotes(body);


    } catch (error) {

        console.error(error);

        name.textContent =
            "Latest release";

        date.textContent =
            "Unable to load release information.";

        notes.textContent =
            "The latest release information could not be loaded.";

    }

}


/*
 * Parses Ceedoku's release-note format.
 *
 * The first three > characters are used by
 * the Ceedoku changelog structure.
 *
 * A fourth > is a real Markdown blockquote.
 *
 * Example:
 *
 * ### 9.0.0
 * > #### Changes:
 * >> ##### Added:
 * >>> - New settings:
 * >>>> - Enable tools.
 * >>>> - Enable pencil mode.
 *
 * The four-> lines are treated as:
 *
 * > - Enable tools.
 * > - Enable pencil mode.
 *
 * Everything under "Developer Changes" is ignored.
 */

function parseReleaseNotes(markdown) {

    const lines =
        markdown.split("\n");

    let html = "";

    let inChanges = false;
    let currentCategory = false;

    for (let line of lines) {

        line = line.trim();


        /*
         * Count the leading > characters.
         */

        const match =
            line.match(/^(>+)\s?(.*)$/);

        if (!match) {
            continue;
        }


        const depth =
            match[1].length;

        let content =
            match[2];


        /*
         * Ignore the version heading.
         */

        if (content.startsWith("### ")) {
            continue;
        }


        /*
         * Changes heading.
         *
         * > #### Changes:
         */

        if (
            content.startsWith("#### Changes:")
        ) {

            inChanges = true;

            continue;
        }


        /*
         * Developer Changes heading.
         *
         * Everything after this is ignored.
         *
         * > #### Developer Changes:
         */

        if (
            content.startsWith("#### Developer Changes:")
        ) {

            break;

        }


        if (!inChanges) {
            continue;
        }


        /*
         * Category heading.
         *
         * >> ##### Added:
         * >> ##### Fixed:
         * >> ##### Changed:
         */

        if (
            depth === 2 &&
            content.startsWith("##### ")
        ) {

            if (currentCategory) {
                html += "</ul>";
            }

            const category =
                content
                    .replace(/^#####\s+/, "")
                    .replace(/:$/, "");

            html +=
                `<h4 style="margin-top:0px;margin-bottom:0px">${escapeHTML(category)}</h4>`;

            html += "<ul>";

            currentCategory = true;

            continue;
        }


        /*
         * Normal changelog bullet.
         *
         * >>> - Something
         */

        if (
            depth === 3 &&
            content.startsWith("- ")
        ) {

            const change =
                content.substring(2);

            html +=
                `<li>${formatReleaseText(change)}</li>`;

            continue;
        }


        /*
         * FOUR OR MORE > CHARACTERS
         *
         * The first three belong to the
         * Ceedoku changelog format.
         *
         * Every additional > is real Markdown.
         *
         * >>>> - Enable tools.
         *
         * becomes:
         *
         * > - Enable tools.
         */

        if (depth >= 4) {

            const markdownDepth =
                depth - 3;

            const markdownPrefix =
                ">".repeat(markdownDepth);

            const markdownLine =
                markdownPrefix + " " + content;

            html +=
                formatMarkdownLine(markdownLine);

            continue;
        }

    }


    if (currentCategory) {
        html += "</ul>";
    }


    if (!html.trim()) {

        return "<p>No release notes were provided.</p>";

    }


    return html;

}


/*
 * Formats a line that uses the additional >
 * characters as real Markdown blockquotes.
 */

function formatMarkdownLine(line) {

    const match =
        line.match(/^(>+)\s?(.*)$/);

    if (!match) {
        return "";
    }

    const depth =
        match[1].length;

    const content =
        match[2];


    /*
     * Turn Markdown blockquotes into
     * nested HTML blockquotes.
     */

    let html = "";

    for (let i = 0; i < depth; i++) {
        html += "<blockquote>";
    }


    /*
     * Support Markdown bullets.
     */

    if (content.startsWith("- ")) {

        html +=
            `<li>${formatReleaseText(content.substring(2))}</li>`;

    } else {

        html +=
            formatReleaseText(content);

    }


    for (let i = 0; i < depth; i++) {
        html += "</blockquote>";
    }


    return html;

}


/*
 * Preserve the text while supporting the
 * Markdown formatting used in release notes.
 */

function formatReleaseText(text) {

    /*
     * Protect escaped Markdown characters.
     */

    const escaped = [];

    text = text.replace(
        /\\([\\`*])/g,
        (_, character) => {

            const index =
                escaped.push(character) - 1;

            return `\uE000${index}\uE001`;

        }
    );


    /*
     * Escape HTML.
     */

    text = escapeHTML(text);


    /*
     * Bold
     */

    text = text.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
    );


    /*
     * Italic
     */

    text = text.replace(
        /(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g,
        "<em>$1</em>"
    );


    /*
     * Inline code
     */

    text = text.replace(
        /`(.*?)`/g,
        "<code>$1</code>"
    );


    /*
     * Restore escaped characters WITHOUT the backslash.
     */

    text = text.replace(
        /\uE000(\d+)\uE001/g,
        (_, index) => escaped[index]
    );


    return text;

}


/*
 * Prevent GitHub release text from being
 * interpreted as HTML.
 */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


loadLatestRelease();


document.title = "Ceedoku • Home"
