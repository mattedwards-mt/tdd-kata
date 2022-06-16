class WordWrap {

  wrap(str, lineLength) {
    let pivot;
    let newString = "";
    while(str.length > 0) {
      pivot = this.findPivotPosition(str, lineLength);
      if (pivot < 0) {
        newString += str;
        str = "";
      } else {
        newString += str.substring(0, pivot) + "\n";
        str = str.substring(pivot + 1);
      }
    }
    return newString;
  }

  findPivotPosition(str, lineLength) {
    if (str.length < lineLength) {
      return -1;
    }
    if (this.isWhitespace(str, lineLength)) {
      return lineLength;
    } else {
      return this.findPivotPosition(str, lineLength - 1);
    }
  }

  isWhitespace(str, pos) {
    const re = /\s/;
    return str[pos].match(re) !== null;
  }

}

module.exports = WordWrap;