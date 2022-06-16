const NumberToLcd = require("../src/number-to-lcd");

const lcd = new NumberToLcd();

describe("LCD object", () => {
  it("can be instantiated", () => {
    // const lcd = new NumberToLcd();
    expect(lcd).toBeInstanceOf(Object);
  });

});

describe("First row for a single digit", () => {
  it("returns '  ' for 1 ",  () => {
    expect(lcd.digitFirstRow(1)).toBe("  ");
  });

  it("returns ' _ ' for 2", () => {
    expect(lcd.digitFirstRow(2)).toBe(" _ ");
  });
});

describe("Second row for a single digit", () => {
  it("returns ' |' for number 1", () => {
    expect(lcd.digitSecondRow(1)).toBe(" |");
  });

  it("returns ' _|' for number 2", () => {
    expect(lcd.digitSecondRow(2)).toBe(" _|");
  });
});

describe("Third row for a single digit", () => {
  it("returns ' |' for number 1", () => {
    expect(lcd.digitThirdRow(1)).toBe(" |");
  });

  it("returns '|_ ' for number 2", () => {
    expect(lcd.digitThirdRow(2)).toBe("|_ ");
  });
});

describe("First row for whole number", () => {
  it("returns '    _ \\n' for 12", () => {
    expect(lcd.firstRow(12)).toBe("    _ \n");
  });
});

describe("Second row for whole number", () => {
  it("returns ' |  _|\\n' for 12", () => {
    expect(lcd.secondRow(12)).toBe(" |  _|\n");
  });
});

describe("Third row for whole number", () => {
  it("returns ' | |_ \\n' for 12", () => {
    expect(lcd.thirdRow(12)).toBe(" | |_ \n");
  });
});

describe("The whole output string", () => {
  it("returns '_ \\n|  _|\\n| |_ \\n' for 12", () => {
    expect(lcd.translate(12)).toBe("    _ \n |  _|\n | |_ \n")
  });
});
