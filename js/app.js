const switchBtn = document.getElementById("switch");
const body = document.body;
const LOCAL_STORAGE_KEY = "theme";

switchBtn.addEventListener("change", toggleTheme);

document.addEventListener("DOMContentLoaded", getCurrentTheme);

// functions

function toggleTheme(e) {
  body.classList.toggle("dark", e.target.checked);
  if (e.target.checked) {
    localStorage.setItem(LOCAL_STORAGE_KEY, "dark");
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, "white");
  }
}

// chose theme
function getCurrentTheme() {
  let theme = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (theme === "dark") {
    switchBtn.checked = true;
    body.classList.add("dark");
  } else {
    switchBtn.checked = false;
    body.classList.remove("dark");
  }
}
