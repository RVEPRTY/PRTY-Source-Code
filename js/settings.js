function toggleNeon() {
  const enabled = localStorage.getItem("neonMode") === "true";
  localStorage.setItem("neonMode", !enabled);
  location.reload();
}

function toggleLowPower() {
  const enabled = localStorage.getItem("lowPower") === "true";
  localStorage.setItem("lowPower", !enabled);
  location.reload();
}

function toggleAnimations() {
  const enabled = localStorage.getItem("noAnimations") === "true";
  localStorage.setItem("noAnimations", !enabled);
  location.reload();
}

function setCloak(title, icon) {
  localStorage.setItem("cloakTitle", title);
  localStorage.setItem("cloakIcon", icon);
  location.reload();
}

function resetCloak() {
  localStorage.removeItem("cloakTitle");
  localStorage.removeItem("cloakIcon");
  location.reload();
}
