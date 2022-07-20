const game = new Game();
/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

document.getElementById("begin-game").addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

/**
 * listen for key down
 */
document.addEventListener("keydown", (e) => {
  game.handleKeydown(e);
});
