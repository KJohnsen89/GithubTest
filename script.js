// Dark mode toggle: defaults to light mode, remembers the user's choice.
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    updateButtonLabel(theme);
  }

  function updateButtonLabel(theme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = localStorage.getItem(STORAGE_KEY);
    applyTheme(saved === "dark" ? "dark" : "light");

    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggleTheme);
  });
})();
