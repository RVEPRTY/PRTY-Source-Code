// Get all elements
const theme = document.getElementById("theme");
const launchMode = document.getElementById("launchMode");
const lowPower = document.getElementById("lowPower");
const notifications = document.getElementById("notifications");

const cloakGoogle = document.getElementById("cloakGoogle");
const cloakClassroom = document.getElementById("cloakClassroom");
const cloakClasslink = document.getElementById("cloakClasslink");
const cloakCanvas = document.getElementById("cloakCanvas");
const cloakClever = document.getElementById("cloakClever");
const fakeTitle = document.getElementById("fakeTitle");

const resetAll = document.getElementById("resetAll");
const prtyMode = document.getElementById("prtyMode");
const focusMode = document.getElementById("focusMode");
const movieNightMode = document.getElementById("movieNightMode");

// Load saved settings
window.addEventListener("DOMContentLoaded", () => {
    theme.value = localStorage.getItem("theme") || "default";
    launchMode.value = localStorage.getItem("launchMode") || "about:blank";
    lowPower.checked = localStorage.getItem("lowPower") === "true";
    notifications.checked = localStorage.getItem("notifications") === "true";

    cloakGoogle.checked = localStorage.getItem("cloakGoogle") === "true";
    cloakClassroom.checked = localStorage.getItem("cloakClassroom") === "true";
    cloakClasslink.checked = localStorage.getItem("cloakClasslink") === "true";
    cloakCanvas.checked = localStorage.getItem("cloakCanvas") === "true";
    cloakClever.checked = localStorage.getItem("cloakClever") === "true";
    fakeTitle.value = localStorage.getItem("fakeTitle") || "";

    prtyMode.checked = localStorage.getItem("prtyMode") === "true";
    focusMode.checked = localStorage.getItem("focusMode") === "true";
    movieNightMode.checked = localStorage.getItem("movieNightMode") === "true";

    applySettings();
});

// Save settings when changed
[theme, launchMode, lowPower, notifications, cloakGoogle, cloakClassroom, cloakClasslink, cloakCanvas, cloakClever, fakeTitle, prtyMode, focusMode, movieNightMode].forEach(el => {
    el.addEventListener("change", () => {
        saveSettings();
        applySettings();
    });
});

// Reset all
resetAll.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

// Save function
function saveSettings() {
    localStorage.setItem("theme", theme.value);
    localStorage.setItem("launchMode", launchMode.value);
    localStorage.setItem("lowPower", lowPower.checked);
    localStorage.setItem("notifications", notifications.checked);

    localStorage.setItem("cloakGoogle", cloakGoogle.checked);
    localStorage.setItem("cloakClassroom", cloakClassroom.checked);
    localStorage.setItem("cloakClasslink", cloakClasslink.checked);
    localStorage.setItem("cloakCanvas", cloakCanvas.checked);
    localStorage.setItem("cloakClever", cloakClever.checked);
    localStorage.setItem("fakeTitle", fakeTitle.value);

    localStorage.setItem("prtyMode", prtyMode.checked);
    localStorage.setItem("focusMode", focusMode.checked);
    localStorage.setItem("movieNightMode", movieNightMode.checked);
}

// Apply settings live
function applySettings() {
    // Theme
    document.body.className = theme.value;

    // Fake title
    if(fakeTitle.value) document.title = fakeTitle.value;
    else document.title = "PRTY";

    // PRTY Mode
    if(prtyMode.checked) document.body.style.background = "linear-gradient(45deg, #7a4cff, #ff4a6b, #4aff9e)";
    else document.body.style.background = "#0b0b0f";

    // Focus Mode
    if(focusMode.checked) document.querySelector("header").style.display = "none";
    else document.querySelector("header").style.display = "block";

    // Movie Night Mode
    if(movieNightMode.checked) document.body.style.filter = "brightness(0.85)";
    else document.body.style.filter = "brightness(1)";

    // Low Power Mode
    if(lowPower.checked) document.body.style.transition = "none";
    else document.body.style.transition = "0.3s ease";
}
