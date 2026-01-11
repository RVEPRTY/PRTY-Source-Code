* ====== SIDEBAR TOGGLE ====== */
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

/* ====== FIXED GAME LAUNCHER ====== */
function launchGame(url){
  // Opens the game in a new tab (works locally and on Vercel)
  window.open(url, "_blank");
}
