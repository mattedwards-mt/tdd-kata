const FIRST_ROW =  [" _ ", "  ", " _ ", " _ ", "   ", " _ ", " _ ", " _ ", " _ ", " _ "];
const SECOND_ROW = ["| |", " |", " _|", " _|", "|_|", "|_ ", "|_ ", "  |", "|_|", "|_|"];
const THIRD_ROW =  ["|_|", " |", "|_ ", " _|", "  |", " _|", "|_|", "  |", "|_|", " _|"];

class NumberToLcd {

  /**
   * ARCHITECTURE NOTE TO SELF
   * Decided to go without a 'number' property and instead pass the number to be translated
   * as an argument to the translate() method. Two reasons:
   * - Having to included the number on instantiation is inflexible. It means a new object has
   *   to be instantiated for every translation.
   * - If number is not passed in on instantiation, this.number has to be populated by the
   *   transform() method. That means transform() has to be called by all of the tests that
   *   test the subsidiary methods.
   * - Simply passing around a parameter makes testing the individual methods easier.
   */

  FirstRow;
  SecondRow;
  ThirdRow;

  constructor() {
    this.FirstRow = FIRST_ROW;
    this.SecondRow = SECOND_ROW;
    this.ThirdRow = THIRD_ROW;
  }

  translate(number) {
    // this.number = number;
    let lcdString = "";
    lcdString += this.firstRow(number);
    lcdString += this.secondRow(number);
    lcdString += this.thirdRow(number);
    return lcdString;
  }

  firstRow(number) {
    let row = "";
    const numberAsString = String(number);
    numberAsString.split("").forEach((digit, index) => {
      row += this.digitFirstRow(Number(digit));
      if (index < numberAsString.length - 1) row += " ";
    });
    return row + "\n";
  }

  secondRow(number) {
    let row = "";
    const numberAsString = String(number);
    numberAsString.split("").forEach((digit, index) => {
      row += this.digitSecondRow(Number(digit));
      if (index < numberAsString.length - 1) row += " ";
    });
    return row + "\n";
  }

  thirdRow(number) {
    let row = "";
    const numberAsString = String(number);
    numberAsString.split("").forEach((digit, index) => {
      row += this.digitThirdRow(Number(digit));
      if (index < numberAsString.length - 1) row += " ";
    });
    return row + "\n";
  }

  digitFirstRow(digit) {
    // if (digit === 1) return "  ";
    // if (digit === 2) return " _ ";
    return this.FirstRow[digit];
  }

  digitSecondRow(digit) {
    // if (digit === 1) return " |";
    // if (digit === 2) return " _|";
    return this.SecondRow[digit];
  }

  digitThirdRow(digit) {
    // if (digit === 1) return " |";
    // if (digit === 2) return "|_ ";
    return this.ThirdRow[digit];
  }

}

module.exports = NumberToLcd;

/**
    _   _       _   _   _   _   _   _      _
 |  _|  _| |_| |_  |_    | |_| |_| | |  |  _|
 | |_   _|   |  _| |_|   | |_|  _| |_|  | |_ 


 1 = 2 spaces width: all rows have an empty space to left
 3 = 3 spaces width: all rows have an empty space to left
 7 = 3 spaces width: all rows have an empty space to left
 All others = 3 spaces width
 1 space between

*/