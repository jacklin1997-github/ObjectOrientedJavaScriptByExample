class Game {
  constructor() {
    this.borad = new Board();
    this.players = createPlayers();
    this.ready = false;
  }

  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    // Because the active parameter in the Player constructor method has a default value of false, no argument for the value of active needs to be passed.
    const players = [
      new Player("Player 1", "#e15258", 1, true),
      new Player("Player 2", "#e59a13", 2),
    ];
    return players;
  }

  startGame() {
    this.style.display = "none";
    document.getElementById("play-area").style.opacity = "1";
  }
}
