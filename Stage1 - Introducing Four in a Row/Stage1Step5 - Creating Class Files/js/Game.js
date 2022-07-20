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
}
