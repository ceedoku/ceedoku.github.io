const versions = document.querySelectorAll(".verUpdate");

let RELEASE_TAG = null;
let RELEASE_BASE = null;
let VERSION_NUMBER = null;
let releasePromise = null;

async function loadLatestRelease() {
if (RELEASE_TAG && RELEASE_BASE) {
return true;
}

if (releasePromise) {
    return releasePromise;
}

releasePromise = (async () => {
    try {
        const response = await fetch(
            "https://api.github.com/repos/Ceebug/ceedoku-client/releases/latest"
        );

        if (!response.ok) {
            throw new Error(
                `GitHub API returned HTTP ${response.status}`
            );
        }

        const release = await response.json();

        if (
            !release.tag_name ||
            !Array.isArray(release.assets)
        ) {
            throw new Error("Invalid GitHub release response");
        }

        RELEASE_TAG = release.tag_name;
        VERSION_NUMBER = RELEASE_TAG.replace(/^v/, "");
        RELEASE_BASE =
            `https://github.com/Ceebug/ceedoku-client/releases/download/${encodeURIComponent(RELEASE_TAG)}`;

        versions.forEach((element, index) => {
            element.textContent = index === 0
                ? `Client ${VERSION_NUMBER}`
                : `Ceedoku Client ${VERSION_NUMBER}`;
        });

        return true;
    } catch (error) {
        console.error("Could not load latest release:", error);

        versions.forEach(element => {
            element.textContent = "Client version unavailable";
        });

        return false;
    } finally {
        releasePromise = null;
    }
})();

return releasePromise;

}

const downloads = {
"windows-x64": {
filename: "Ceedoku-Installer_Windows-x64.exe",
meta: "Windows Installer · x64",
os: "windows"
},

"windows-x86": {
    filename: "Ceedoku-Installer_Windows-x86.exe",
    meta: "Windows Installer · x86",
    os: "windows"
},

"windows-arm64": {
    filename: "Ceedoku-Installer_Windows-arm64.exe",
    meta: "Windows Installer · ARM64",
    os: "windows"
},

"linux-x64": {
    filename: "Ceedoku-Installer_Linux-x64.AppImage",
    meta: "Linux AppImage · x64",
    os: "linux"
},

"linux-arm64": {
    filename: "Ceedoku-Installer_Linux-arm64.AppImage",
    meta: "Linux AppImage · ARM64",
    os: "linux"
},

"linux-arm32": {
    filename: "Ceedoku-Installer_Linux-arm32.AppImage",
    meta: "Linux AppImage · ARM32",
    os: "linux"
},

"macos-universal": {
    filename: "Ceedoku-Installer_MacOS-universal.dmg",
    meta: "macOS · Universal DMG",
    os: "macos"
}


};

/* NAVIGATION */

let previousStep = "step-os";

function show(id) {
document.querySelectorAll(".step").forEach(step => {
step.classList.remove("active");
});

const target = document.getElementById(id);

if (!target) {
    return;
}

target.classList.add("active");

if (id === "step-os") {
    document.getElementById("main-card")
        .removeAttribute("data-os");
}

}

function chooseOS(os) {
previousStep = "step-" + os;

document.getElementById("main-card").dataset.os = os;

show("step-" + os);

}

/* DOWNLOAD */

async function download(id) {
const data = downloads[id];

if (!data) {
    return;
}

const loaded = await loadLatestRelease();

if (!loaded || !RELEASE_BASE) {
    const title = document.getElementById("download-title");
    const description = document.getElementById("download-description");
    const progress = document.getElementById("download-progress-bar");
    const fallback = document.getElementById("download-fallback");

    title.textContent = "Unable to load download";
    description.textContent =
        "Ceedoku couldn't retrieve the latest release. Check your connection and try again.";
    progress.style.width = "0%";
    fallback.hidden = true;

    show("step-download");
    return;
}

const asset = data.filename;
const url = `${RELEASE_BASE}/${encodeURIComponent(asset)}`;

previousStep = "step-" + data.os;

document.getElementById("main-card").dataset.os = data.os;

const screen = document.getElementById("final-download-screen");
const title = document.getElementById("download-title");
const description = document.getElementById("download-description");
const meta = document.getElementById("download-meta");
const icon = document.getElementById("download-icon");
const progress = document.getElementById("download-progress-bar");
const fallback = document.getElementById("download-fallback");

screen.className = "download-screen " + data.os;
title.textContent = "Download Ceedoku";
description.textContent = "Your download should begin shortly.";
meta.textContent = data.meta;
icon.classList.remove("is-complete");
icon.classList.add("is-downloading");
progress.style.width = "0%";

fallback.hidden = false;
fallback.href = url;
fallback.removeAttribute("download");
fallback.textContent = "Download manually";

show("step-download");

/* Navigate directly to GitHub's release asset. */
const link = document.createElement("a");
link.href = url;
link.style.display = "none";

document.body.appendChild(link);
link.click();
link.remove();

title.textContent = "Download started";
description.textContent =
    "Your browser should begin downloading Ceedoku. If it doesn't, use the manual download link below.";
progress.style.width = "100%";
window.setTimeout(() => {
    icon.classList.remove("is-downloading");
    icon.classList.add("is-complete");
}, 300);

}

/* LOAD THE VERSION WHEN THE PAGE STARTS */

loadLatestRelease();