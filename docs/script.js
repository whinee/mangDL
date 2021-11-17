var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    }

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}
