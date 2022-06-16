const Wordle = require("../src/wordle");

const wordle = new Wordle("wordle");
const better = new Wordle("better");

describe("Wordle object", () => {
  it("Can be instantiated", () => {
    expect(wordle).toBeInstanceOf(Object);
  });

  it("Has a target property which is a string", () => {
    expect(typeof wordle.target).toBe("string");
  });

  it("has a guess property which is an empty string to begin with", () => {
    expect(wordle.guess).toBe("");
  });
});

describe("inPosition", () => {
  it("returns true when char is in right position", () => {
    expect(wordle.inPosition("w", 0)).toBeTruthy();
  });

  it("returns false when char not in right position", () => {
    expect(wordle.inPosition("x", 0)).toBeFalsy();
  });
});

describe("notInTarget", () => {
  it("returns true when char NOT in target word", () => {
    expect(wordle.inTarget("d")).toBeTruthy();
  });

  it("returns false when char IS in target word", () => {
    expect(wordle.inTarget("x")).toBeFalsy();
  });
});

describe("targetCharCount", () => {
  it("returns 2 for the char 't'", () => {
    expect(better.targetCharCount("t")).toBe(2);
  });

  it("returns 2 for the char 'e'", () => {
    expect(better.targetCharCount("e")).toBe(2);
  });

  it("returns 1 for the char 'b'", () => {
    expect(better.targetCharCount("b")).toBe(1);
  });

  it("returns 0 for the char 'z'", () => {
    expect(better.targetCharCount("z")).toBe(0);
  });
});

describe("guessCharCountSoFar", () => {
  wordle.guess = "beetle";
  it("returns 2 for the last 'e'", () => {
    expect(wordle.guessCharCountSoFar("e", 5)).toBe(2);
  });

  it("returns 0 for 'f'", () => {
    expect(wordle.guessCharCountSoFar("f", 0)).toBe(0);
  });

  it("returns 0 for the first 'e'", () => {
    expect(wordle.guessCharCountSoFar("e", 1)).toBe(0);
  });
});

describe("checkWord - target = ropes", () => {
  it("returns '00000' for guess of 'child", () => {
    const ropes = new Wordle("ropes");
    // ropes.guess = "child";
    expect(ropes.checkWord("child")).toBe("00000");
  });

  it("returns '22020' for guess of 'child", () => {
    const alert = new Wordle("alert");
    // alert.guess = "alarm";
    expect(alert.checkWord("alarm")).toBe("22020");
  });

  it("returns '00010' for guess of 'chore", () => {
    const stair = new Wordle("stair");
    // stair.guess = "chore";
    expect(stair.checkWord("chore")).toBe("00010");
  });
});
