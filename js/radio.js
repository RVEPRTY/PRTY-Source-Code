// 🔊 ADD YOUR SOUNDCLOUD PLAYLIST LINKS HERE
const stations = [
  // 🔥 Main
  "https://soundcloud.com/YOUR_PLAYLIST_LINK",

  // 🌙 Late Night
  "https://soundcloud.com/YOUR_PLAYLIST_LINK",

  // ⚡ Energy
  "https://soundcloud.com/YOUR_PLAYLIST_LINK",

  // 🧊 Chill
  "https://soundcloud.com/YOUR_PLAYLIST_LINK"
];

const frame = document.getElementById("radio-frame");

// Load station
function loadStation(index) {
  const url = encodeURIComponent(stations[index]);
  frame.src = `https://w.soundcloud.com/player/?url=${url}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=true`;
}

// Load random station on page load
window.addEventListener("load", () => {
  const random = Math.floor(Math.random() * stations.length);
  loadStation(random);
});
