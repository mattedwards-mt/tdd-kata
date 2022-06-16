const WordWrap = require("../src/word-wrap");

const wordWrap = new WordWrap();

describe("WordWrap object", () => {
  it("can be instantiated", () => {
    expect(wordWrap).toBeInstanceOf(Object);
  });
});

describe("Create new string", () => {
  let input;

  beforeEach(() => {
    input = "You write a class called Wrapper.";
  });

  it("returns 'You write a class\\ncalled Wrapper.' where line length is 17", () => {
    expect(wordWrap.wrap(input, 17)).toBe("You write a class\ncalled Wrapper.");
  });

  it("returns 'You write a class\\ncalled Wrapper.' where line length is 20", () => {
    expect(wordWrap.wrap(input, 20)).toBe("You write a class\ncalled Wrapper.");
  });

  it("returns 'You write a class called\\nWrapper.' where line length is 24", () => {
    expect(wordWrap.wrap(input, 24)).toBe("You write a class called\nWrapper.");
  });

  it("returns 'You write a class called\\nWrapper.' where line length is 28", () => {
    expect(wordWrap.wrap(input, 28)).toBe("You write a class called\nWrapper.");
  });

  it("returns 'You write a class called Wrapper.' where line length is 50", () => {
    expect(wordWrap.wrap(input, 50)).toBe("You write a class called Wrapper.");
  });
});

describe("Find pivot position", () => {
  let input;

  beforeEach(() => {
    input = "You write a class called Wrapper.";
  });

  it("returns -1 where str is shorter than line length", () => {
    expect(wordWrap.findPivotPosition(input, 100)).toBe(-1);
  });

  it("works when line length position is whitespace", () => {
    expect(wordWrap.findPivotPosition(input, 17)).toBe(17);
    expect(wordWrap.findPivotPosition(input, 24)).toBe(24);
  });

  it("counts back when line length position is not whitespace", () => {
    expect(wordWrap.findPivotPosition(input, 20)).toBe(17);
    expect(wordWrap.findPivotPosition(input, 28)).toBe(24);
  });

});

describe("Check if character at given position is whitespace", () => {

  let input;

  beforeEach(() => {
    input = "You write a class called Wrapper.";
  });

  it("returns true where given character is a whitespece character", () => {
    expect(wordWrap.isWhitespace(input, 3)).toEqual(true);
    expect(wordWrap.isWhitespace(input, 9)).toEqual(true);
  });

  it("returns false where given character is not a whitespace character", () => {
    expect(wordWrap.isWhitespace(input, 6)).toEqual(false);
    expect(wordWrap.isWhitespace(input, 15)).toEqual(false);
  });
});
