document.addEventListener("keydown", (e) => {
  const emptyIndex = tiles.indexOf(0);
  let target = null;

  if (e.key === "ArrowUp") target = emptyIndex + size;
  if (e.key === "ArrowDown") target = emptyIndex - size;
  if (e.key === "ArrowLeft") target = emptyIndex + 1;
  if (e.key === "ArrowRight") target = emptyIndex - 1;

  if (target !== null && target >= 0 && target < tiles.length) {
    moveTile(target);
  }
});
