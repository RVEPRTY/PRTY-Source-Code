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

