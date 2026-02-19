let startX, startY;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - startX;
  const dy = e.changedTouches[0].clientY - startY;

  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 30) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
    if (dx < -30) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
  } else {
    if (dy > 30) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown" }));
    if (dy < -30) document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
  }
});
