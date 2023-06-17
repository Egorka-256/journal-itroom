const color = document.getElementById("color");
let theme = document.getElementById("theme");

color.onclick = function () {
    if (theme.getAttribute("href") == "../black.css") {
        theme.href = "../white.css";
    } else {
        theme.href = "../black.css";
    }

    if (color.innerHTML == "<h2>☀️</h2>") {
        color.innerHTML = "<h2>🌙</h2>"
    } else {
        color.innerHTML = "<h2>☀️</h2>"
    }
}
