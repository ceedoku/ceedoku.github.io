
// button

const button = document.getElementById("button");

button.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;

    button.classList.remove("spring");
});

button.addEventListener("pointerup", (event) => {
    if (event.button !== 0) return;

    button.classList.add("spring");

    setTimeout(() => {
        window.location.href = "https://ceedoku.github.io/CSF%20Specification%20v1.0.pdf";
    }, 500);
});
