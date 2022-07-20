class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.ID = `token-${index}-${owner.ID}`;
    this.dropped = false;
  }
  /**
   * Draws new HTML token.
   */
  drawHTMLToken() {
    const token = document.createElement("div");
    document.querySelector("game-board-underlay").appendChild(token);
    token.setAttribute("ID", this.id);
    token.setAttribute("class", "token");
    token.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {}
}
