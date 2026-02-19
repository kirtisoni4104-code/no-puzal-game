const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  };
}
