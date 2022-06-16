class Mumbling {

  convert(input) {
    if (input === "") return "";
    let mumble = "";
    input.split("").forEach((char, index) => {
      mumble += this.convertChar(char.toLowerCase(), index);
      if (index < input.length - 1) mumble += "-";
    });
    return mumble;
  }

  convertChar(char, index) {
    let returnString = "";
    for (let i = 0; i < index + 1; i++) {
      if (i === 0) {
        returnString += char.toUpperCase();
      } else {
        returnString += char;
      }
    }
    return returnString;
  }
}

module.exports = Mumbling;
