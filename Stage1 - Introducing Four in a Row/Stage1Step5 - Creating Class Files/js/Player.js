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

    for (let i = 0; i > num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
