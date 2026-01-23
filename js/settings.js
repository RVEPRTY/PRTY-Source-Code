/* THEMES */
function setTheme(theme) {
  localStorage.setItem("prty-theme", theme);
  document.body.className = theme;
}

/* CLOAK PRESETS */
function cloakPreset(type) {
  const presets = {
    ClassLink: {
      title: "ClassLink",
      icon: "https://www.classlink.com/favicon.ico"
    },
    Google: {
      title: "Google",
      icon: "https://www.google.com/favicon.ico"
    },
    Canvas: {
      title: "Canvas",
      icon: "https://canvas.instructure.com/favicon.ico"
    }
  };

  const p = presets[type];
  applyCloak(p.title, p.icon);
}

/* CUSTOM CLOAK */
function setCustomTitle(title) {
  localStorage.setItem("cloakTitle", title);
  document.title = title;
}

function setCustomIcon(url) {
  localStorage.setItem("cloakIcon", url);
  setFavicon(url);
}

function applyCloak(title, icon) {
  document.title = title;
  setFavicon(icon);
  localStorage.setItem("cloakTitle", title);
  localStorage.setItem("cloakIcon", icon);
}

function setFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}

/* REPORT */
function reportIssue() {
  window.open("https://forms.gle/REPLACE_WITH_YOUR_FORM", "_blank");
}

/* FUN BUTTON */
function doNothing() {
  alert("bro really thought 💀");
}
