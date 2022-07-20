class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
   * returns active player
   * @return {Object}player - the active player
   */
  get activePlayer() {
    //this.players is an array , we could use .find
    return this.players.find((player) => player.active);
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

  /**
   * Initializes game.
   */
  startGame() {
    this.board.drawHTMLBoard();
    //activeToken 是 active tokens 中的第一個
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */
  handleKeydown(e) {
    if (this.ready) {
      if (e.key === "ArrowLeft") {
        //move left
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        //move right
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === "ArrowDown") {
        // play token
      }
    }
  }
}
