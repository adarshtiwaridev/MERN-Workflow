const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const gamebtn = document.querySelector(".btn");

let currentplayer;
let gamegrid;

const winingposition = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Game Initialization
function initgame() {
  currentplayer = "X";
  gamegrid = ["", "", "", "", "", "", "", "", ""];

  boxes.forEach((box, index) => {
    box.innerText = "";
    boxes[index].style.pointerEvents = "all";
    box.classList.remove("win");
  });

  gamebtn.classList.remove("active");
  gameinfo.innerText = `Current Player - ${currentplayer}`;
}

initgame();

// Swap Player Turn
function swapturn() {
  currentplayer = currentplayer === "X" ? "O" : "X";
  gameinfo.innerText = `Current Player - ${currentplayer}`;
}

// Check Game Over
function checkGameOver() {
  let winner = "";

  winingposition.forEach((position) => {
    if (
      gamegrid[position[0]] !== "" &&
      gamegrid[position[0]] === gamegrid[position[1]] &&
      gamegrid[position[1]] === gamegrid[position[2]]
    ) {
      winner = gamegrid[position[0]];
      // Highlight winning boxes
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
    });

  if (winner !== "") {
    gameinfo.innerText = `Winner - ${winner}`;

         gamebtn.classList.add("active");
    boxes.forEach((box) => box.style.pointerEvents = "none");
    return;
  }

  // Check for draw
  if (!gamegrid.includes("")) {
    gameinfo.innerText = `Game Tied!`;
    gamebtn.classList.add("active");
  }
}

// Box Click Handler
function handleClick(index) {
  if (gamegrid[index] === "") {
    boxes[index].innerText = currentplayer;
    gamegrid[index] = currentplayer;
    boxes[index].style.pointerEvents = "none";

    // Check win/draw
    checkGameOver();

    // Turn change only if no winner
    if (!gameinfo.innerText.includes("Winner") && !gameinfo.innerText.includes("Tied")) {
      swapturn();
    }
  }
}

// Event listeners
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

gamebtn.addEventListener("click", initgame);
