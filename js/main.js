/* ====== SIDEBAR TOGGLE ====== */
function toggleSidebar(){
  const sb = document.getElementById("sidebar");
  if(sb.style.left === "-250px"){
    sb.style.left = "0";
  } else {
    sb.style.left = "-250px";
  }
}

/* ====== LIVE CLOCK & DATE ====== */
function updateClock(){
  const now = new Date();
  if(document.getElementById("time")){
    document.getElementById("time").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
  }
}
setInterval(updateClock,1000);
updateClock();

/* ====== FIXED GAME LAUNCHER ★ ====== */
function launchGame(url){
  const win = window.open(url, "_blank"); // open in new tab
  if(!win){
    // fallback if popup blocked
    window.location.href = url;
  }
}

// Use chosen default launch mode
function launchPRTY(url) {
    const mode = localStorage.getItem("launchMode") || "about:blank";
    window.open(url, mode);
}

// ⭐ PRTY Activity Bar Logic
const prtyActivityMessages = [
  "Supercalifragicex, wait i forgot the rest",
  "Why are you so bored blud",
  "PRTY DOES NOT WORK, jk",
  "Bug Hunters probably cooking 🐛",
  "GG chat",
  "AfterPRTY energy detected ✨",
  "If you're here, you're already bored",
  "This site exists. Somehow.",
  "hola amigo"
];

function updatePrtyActivity() {
  const textEl = document.getElementById("prty-activity-text");
  if (!textEl) return;

  const random =
    prtyActivityMessages[
      Math.floor(Math.random() * prtyActivityMessages.length)
    ];

  textEl.style.opacity = 0;
  setTimeout(() => {
    textEl.textContent = random;
    textEl.style.opacity = 0.9;
  }, 300);
}

// Initial load
updatePrtyActivity();

// Auto update every 15 seconds
setInterval(updatePrtyActivity, 15000);

// Panic Mode Shortcut: CTRL + L
document.addEventListener('keydown', function(e) {
  // Check if CTRL + L is pressed
  if (e.ctrlKey && e.key.toLowerCase() === 'l') {
    window.location.href = 'https://www.classlink.com';
  }
});

// ===== Movies Page Loading Screen =====
if (document.getElementById("movie-loading")) {
  const moviePhrases = [
    "Lights off. Movie on.",
    "Loading questionable content…",
    "AfterPRTY Cinema booting",
    "Background noise loading",
    "This seemed like a good idea"
  ];

  document.getElementById("movie-loading-text").innerText =
    moviePhrases[Math.floor(Math.random() * moviePhrases.length)];

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("movie-loading").style.display = "none";
    }, 900);
  });
}

// Loading Screen Word Bank
const loadingPhrases = [
  "is this kinda like Frogiee's Arcade?",
  "Mr Beast, Give some money",
  "HELP, IDK WHAT TO PUT HERE",
  "GG, chat",
  "Lightspeed is ass"
];

// Pick a random phrase
document.getElementById('loading-text').innerText =
  loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];

// Remove loading screen after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  loader.style.transition = 'opacity 0.5s ease';
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = 'none', 500);
});

/* APPLY SAVED SETTINGS */
window.onload = () => {
  const theme = localStorage.getItem("prty-theme");
  const title = localStorage.getItem("cloakTitle");
  const icon = localStorage.getItem("cloakIcon");

  if (theme) document.body.className = theme;
  if (title) document.title = title;

  if (icon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = icon;
  }
};

/* PANIC SHORTCUT WITH FAKE LOADING */
let panicTimer = null;
let panicSeconds = 3;

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "l") {
    e.preventDefault();
    startPanic();
  }
});

function startPanic() {
  const overlay = document.getElementById("panic-overlay");
  if (!overlay) return;

  panicSeconds = 3;
  overlay.style.display = "flex";
  updateCountdown();

  panicTimer = setInterval(() => {
    panicSeconds--;
    updateCountdown();
    if (panicSeconds <= 0) {
      clearInterval(panicTimer);
      redirectPanic();
    }
  }, 1000);
}

function updateCountdown() {
  const text = document.getElementById("panic-countdown");
  if (text) text.innerText = `Redirecting in ${panicSeconds}...`;
}

function cancelPanic() {
  clearInterval(panicTimer);
  document.getElementById("panic-overlay").style.display = "none";
}

function redirectPanic() {
  const panicURL =
    localStorage.getItem("panicURL") ||
    "https://www.classlink.com";

  window.location.replace(panicURL);
}

