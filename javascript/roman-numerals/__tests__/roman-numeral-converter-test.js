const RomanNumeralConverter =  require ("../src/roman-numeral-converter");

let converter = new RomanNumeralConverter();
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

describe("Roman Numeral Converter object", () => {

    it("can be instantiated", () => {
        expect(converter).toBeInstanceOf(Object);
    });

});

describe("Units conversion", () => {

    it("returns I when the number is 1", () => {
        expect(converter.convertUnitsToString(1)).toBe("I");
    });

    it("returns II when the number is 2", () => {
        expect(converter.convertUnitsToString(2)).toBe("II");
    });

    it("returns V when the number is 5", () => {
        expect(converter.convertUnitsToString(5)).toBe("V");
    });

    it("returns VIII when the number is 8", () => {
        expect(converter.convertUnitsToString(8)).toBe("VIII");
    });
});

describe("Tens conversion", () => {

    it("determines there are zero tens in the number 9", () => {
        expect(converter.numberOfTens(9)).toBe(0);
    });

    it("determines there are 7 tens in the number 78", () => {
        expect(converter.numberOfTens(78)).toBe(7);
    });

    it("returns X when the number is between 10 & 19 inclusive", () => {
        const input = randomIntFromRange(10, 19);
        expect(converter.convertTensToString(input)).toBe("X");
    });

    it("returns XL when the number is between 40 & 49 inclusive", () => {
        const input = randomIntFromRange(40, 49);
        expect(converter.convertTensToString(input)).toBe("XL");
    });

    it("returns L when the number is between 50 & 59 inclusive", () => {
        const input = randomIntFromRange(50, 59);
        expect(converter.convertTensToString(input)).toBe("L");
    });

    it("returns LX when the number is between 60 & 69 inclusive", () => {
        const input = randomIntFromRange(60, 69);
        expect(converter.convertTensToString(input)).toBe("LX");
    });

    it("returns LXXX when the number is between 80 & 89 inclusive", () => {
        const input = randomIntFromRange(80, 89);
        expect(converter.convertTensToString(input)).toBe("LXXX");
    });

    it("returns XC when the number is between 90 & 99 inclusive", () => {
        const input = randomIntFromRange(90, 99);
        expect(converter.convertTensToString(input)).toBe("XC");
    });
});

describe("Hundreds conversion", () => {

    it("determines there are zero hundreds when the number is < 100", () => {
        const input = randomIntFromRange(1, 99);
        expect(converter.numberOfHundreds(input)).toBe(0);
    });

    it("determines there are 4 hundreds when the number is between 400 & 499 inclusive", () => {
        const input = randomIntFromRange(400, 499);
        expect(converter.numberOfHundreds(input)).toBe(4);
    });

    it("determines there are 9 hundreds when the number is between 900 & 999 inclusive", () => {
        const input = randomIntFromRange(900, 999);
        expect(converter.numberOfHundreds(input)).toBe(9);
    });

    it("returns C when the number is between 100 & 199 inclusive", () => {
        const input = randomIntFromRange(100, 199);
        expect(converter.convertHundredsToString(input)).toBe("C");
    });

    it("returns CD when the number is between 400 & 499 inclusive", () => {
        const input = randomIntFromRange(400, 499);
        expect(converter.convertHundredsToString(input)).toBe("CD");
    });

    it("returns D when the number is between 500 & 599 inclusive", () => {
        const input = randomIntFromRange(500, 599);
        expect(converter.convertHundredsToString(input)).toBe("D");
    });

    it("returns DCCC when the number is between 800 & 899 inclusive", () => {
        const input = randomIntFromRange(800, 899);
        expect(converter.convertHundredsToString(input)).toBe("DCCC");
    });

    it("returns CM when the number is between 900 & 999 inclusive", () => {
        const input = randomIntFromRange(900, 999);
        expect(converter.convertHundredsToString(input)).toBe("CM");
    });
});

describe("Thousands conversion", () => {

    it("determines there are zero thousands where number is < 1000", () => {
        const input = randomIntFromRange(1, 999);
        expect(converter.numberOfThousands(input)).toBe(0);
    });

    it("determines there are 3 thousands in the number 3456", () => {
        expect(converter.numberOfThousands(3456)).toBe(3);
    });

    it("determines there are 2 thousands in the number 2345", () => {
        expect(converter.numberOfThousands(2345)).toBe(2);
    });

    it("returns MMM when the number is between 3000 & 3999 inclusive", () => {
        const input = randomIntFromRange(3000, 3999);
        expect(converter.convertThousandsToString(input)).toBe("MMM");
    });

    it("returns MM when the number is between 2000 & 2999 inclusive", () => {
        const input = randomIntFromRange(2000, 2999);
        expect(converter.convertThousandsToString(input)).toBe("MM");
    });

    it("returns M when the number is between 1000 & 1999 inclusive", () => {
        const input = randomIntFromRange(1000, 1999);
        expect(converter.convertThousandsToString(input)).toBe("M");
    });

    it("returns empty string when the number is < 1000", () => {
        const input = randomIntFromRange(1, 999);
        expect(converter.convertThousandsToString(input)).toBe("");
    });
});

describe("Building the complete Roman Numeral string", () => {

    it("handles numbers less than 10", () => {
        expect(converter.toRoman(4)).toBe("IV");
        expect(converter.toRoman(8)).toBe("VIII");
    });

    it("handles numbers between 10 & 99 inclusive", () => {
        expect(converter.toRoman(14)).toBe("XIV");
        expect(converter.toRoman(78)).toBe("LXXVIII");
    });

    it("handles numbers between 100 & 999 inclusive", () => {
        expect(converter.toRoman(209)).toBe("CCIX");
        expect(converter.toRoman(464)).toBe("CDLXIV");
        expect(converter.toRoman(789)).toBe("DCCLXXXIX");
    });

    it("handles numbers over 1000", () => {
        expect(converter.toRoman(1000)).toBe("M");
        expect(converter.toRoman(1001)).toBe("MI");
        expect(converter.toRoman(1990)).toBe("MCMXC");
        expect(converter.toRoman(1666)).toBe("MDCLXVI");
        expect(converter.toRoman(2008)).toBe("MMVIII");
    });
});