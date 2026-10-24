
// go home button

const gohome = document.getElementById("gohome");

gohome.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;

    gohome.classList.remove("spring");
});

gohome.addEventListener("pointerup", (event) => {
    if (event.button !== 0) return;

    gohome.classList.add("spring");

    setTimeout(() => {
        window.location.href = "https://ceedoku.github.io/home";
    }, 500);
});


// play ceedoku button

const playceedoku = document.getElementById("playceedoku");

playceedoku.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;

    playceedoku.classList.remove("spring");
});

playceedoku.addEventListener("pointerup", (event) => {
    if (event.button !== 0) return;

    playceedoku.classList.add("spring");

    setTimeout(() => {
        window.location.href = "https://ceedoku.github.io";
    }, 500);
});
