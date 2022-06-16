const UNITS_MAPPER = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const TENS_MAPPER = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const HUNDREDS_MAPPER = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

class RomanNumeralConverter {

    unitsMapper;
    tensMapper;
    hundredsMapper;

    constructor() {
        this.unitsMapper = UNITS_MAPPER;
        this.tensMapper = TENS_MAPPER;
        this.hundredsMapper = HUNDREDS_MAPPER;
    }

    toRoman(inputInteger) {
        let romanNumeral = "";
        let value = inputInteger;
        romanNumeral += this.convertThousandsToString(value);
        value = value % 1000;
        romanNumeral += this.convertHundredsToString(value);
        value = value % 100;
        romanNumeral += this.convertTensToString(value);
        value = value % 10;
        romanNumeral += this.convertUnitsToString(value);
        return romanNumeral;
    }

    convertThousandsToString(number) {
        let outputString = "";
        for (let i = 0; i < this.numberOfThousands(number); i++) {
            outputString += "M";
        }
        return outputString;
    }

    numberOfThousands(number) {
        return Math.floor(number / 1000);
    }

    convertHundredsToString(number) {
        return this.hundredsMapper[this.numberOfHundreds(number)];
    }

    numberOfHundreds(number) {
        return Math.floor(number / 100);
    }

    convertTensToString(number) {
        return this.tensMapper[this.numberOfTens(number)];
    }

    numberOfTens(number) {
        return Math.floor(number / 10);
    }

    convertUnitsToString(number) {
        return this.unitsMapper[number];
    }

}

module.exports = RomanNumeralConverter;