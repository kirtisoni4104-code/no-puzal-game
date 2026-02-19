function showMessage(msg) {
  alert(msg);
}

function updateMoves(count) {
  const el = document.getElementById("moves");
  if (el) el.textContent = count;
}
