class Player {
  constructor(name, color, ID, active = false) {
    this.name = name;
    this.color = color;
    this.ID = ID;
    this.active = active;
    this.tokens = this.createTokens(21);
    //constructor args can put initial value
    //we can put properties that isn't exist in args
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */
  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
  /**
   * gets all tokens that haven't been dropped
   * @return {array} Array of unused tokens
   */
  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);
  }
  /**
   * gets the active token by returning the first token in the array of unused tokens
   * @return {Object} First token obj in the array of unused tokens
   */
  get activeToken() {
    return this.unusedTokens[0];
  }
}
