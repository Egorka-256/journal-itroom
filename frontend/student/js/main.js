const color = document.getElementById("color");

color.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "../css/black.css") {
        theme.href = "../css/white.css";
    } else {
        theme.href = "../css/black.css";
    }

    if (color.innerHTML == "<h2>🌙</h2>") {
        color.innerHTML = "<h2>☀️</h2>"
    } else {
        color.innerHTML = "<h2>🌙</h2>"
    }
}

