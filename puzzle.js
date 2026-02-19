let size = 3;
let tiles = [];
let moves = 0;

const game = document.getElementById("game");
const movesDisplay = document.getElementById("moves");
const difficultySelect = document.getElementById("difficulty");

/* ---------- INIT ---------- */
function initGame() {
  size = parseInt(difficultySelect.value);
  tiles = [...Array(size * size).keys()];
  shuffleTiles();
  moves = 0;
  render();
}

/* ---------- SHUFFLE (SOLVABLE) ---------- */
function shuffleTiles() {
  do {
    tiles.sort(() => Math.random() - 0.5);
  } while (!isSolvable() || isSolved());
}

/* ---------- SOLVABLE CHECK ---------- */
function isSolvable() {
  let inv = 0;
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] && tiles[j] && tiles[i] > tiles[j]) inv++;
    }
  }
  return inv % 2 === 0;
}

/* ---------- RENDER ---------- */
function render() {
  game.innerHTML = "";
  game.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  tiles.forEach((num, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    if (num === 0) {
      tile.classList.add("empty");
    } else {
      tile.textContent = num;
      tile.onclick = () => moveTile(index);
    }

    game.appendChild(tile);
  });

  movesDisplay.textContent = moves;
}

/* ---------- MOVE ---------- */
function moveTile(index) {
  const emptyIndex = tiles.indexOf(0);
  if (isAdjacent(index, emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] =
      [tiles[emptyIndex], tiles[index]];

    moves++;
    render();

    if (isSolved()) {
      game.classList.add("win");
      alert(`🎉 Puzzle Solved in ${moves} moves!`);
    }
  }
}

/* ---------- HELPERS ---------- */
function isAdjacent(i, j) {
  const r1 = Math.floor(i / size), c1 = i % size;
  const r2 = Math.floor(j / size), c2 = j % size;
  return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
}

function isSolved() {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) return false;
  }
  return tiles[tiles.length - 1] === 0;
}

function shuffle() {
  game.classList.remove("win");
  initGame();
}

difficultySelect.addEventListener("change", initGame);
initGame();
