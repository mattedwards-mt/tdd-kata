class Wordle {
  constructor(target) {
    this.target = target;
    this.guess = "";
  }

  inPosition(char, position) {
    return char === this.target[position];
  }

  inTarget(char) {
    return this.target.includes(char);
  }

  targetCharCount(char) {
    let count = 0;
    this.target.split("").forEach((letter) => {
      if (letter === char) {
        count++;
      }
    });
    return count;
  }

  guessCharCountSoFar(char, position) {
    if (position === 0) return 0;
    let count = 0;
    for (let i = 0; i < position; i++) {
      if (this.guess[i] === char) {
        count++;
      }
    }
    return count;
  }

  checkWord(guess) {
    this.guess = guess;
    let result = "";
    this.guess.split("").forEach((char, i) => {
      result += this.checkChar(char, i);
    });
    return result;
  }
}

module.exports = Wordle;
