// const { expect, it } = require("@jest/globals");
const { 
  listPosition,
  countLowerValueChars,
  getDenominator,
  getArrayOfDuplicates,
  getMapOfSubsidiaryLetters, 
  isLessThanTarget, 
  factorial } = require("../src/alphabetic-anagrams");


describe("listPosition" ,() => {
  it("returns 1 for aaab", () => {
    expect(listPosition("aaab")).toBe(1);
  });

  it("returns 2 for abab", () => {
    expect(listPosition("abab")).toBe(2);
  });

  it("returns 4 for baaa", () => {
    expect(listPosition("baaa")).toBe(4);
  });

  it("returns 24572 for question", () => {
    expect(listPosition("question")).toBe(24572);
  });

  it("returns 10743 for bookkeeper", () => {
    expect(listPosition("bookkeeper")).toBe(10743);
  });
});

describe("countLowerValueChars", () => {
  it("returns zero for aaab", () => {
    expect(countLowerValueChars("aaab")).toBe(0);
  });

  it("returns zero for abab", () => {
    expect(countLowerValueChars("abab")).toBe(0);
  });

  it("returns 1 for bab", () => {
    expect(countLowerValueChars("bab")).toBe(1);
  });

  it("returns 5 for ookkeeper", () => {
    expect(countLowerValueChars("ookkeeper")).toBe(5);
  });

  it("returns 6 for uestion", () => {
    expect(countLowerValueChars("uestion")).toBe(6);
  });
});

describe("getDenominator", () => {
  it("returns 1 for question", () => {
    expect(getDenominator("question")).toBe(1);
  });

  it("returns 24 for bookkeeper", () => {
    expect(getDenominator("bookkeeper")).toBe(24);
  });

  it("returns 6 for baaa", () => {
    expect(getDenominator("baaa")).toBe(6);
  });

  it("returns 4 for abab", () => {
    expect(getDenominator("abab")).toBe(4);
  });

  it("returns 2 for bab", () => {
    expect(getDenominator("bab")).toBe(2);
  });
});

describe("getArrayOfDuplicates", () => {
  it("returns [] from abcd", () => {
    expect(getArrayOfDuplicates("abcd")).toEqual([]);
  });

  it("returns [2, 2] from abab", () => {
    expect(getArrayOfDuplicates("abab")).toEqual([2, 2]);
  });

  it("returns [2] from bab", () => {
    expect(getArrayOfDuplicates("bab")).toEqual([2]);
  });

  it("returns [2, 3] from bccddd", () => {
    expect(getArrayOfDuplicates("bccddd")).toEqual([2, 3]);
  });

  it("returns [2, 2, 3] from bookkeeper", () => {
    expect(getArrayOfDuplicates("bookkeeper")).toEqual([2, 2, 3]);
  });

  it("returns [2, 2, 3] from ookkeeper", () => {
    expect(getArrayOfDuplicates("ookkeeper")).toEqual([2, 2, 3]);
  });
});

describe("getMapOfSubsidiaryLetters", () => {
  it("returns a map object", () => {
    expect(getMapOfSubsidiaryLetters("abcd")).toBeInstanceOf(Map);
  });

  it("returns a map of bcd for bcd", () => {
    expect(getMapOfSubsidiaryLetters("bcd").keys()).toContain("b");
    expect(getMapOfSubsidiaryLetters("bcd").keys()).toContain("c");
    expect(getMapOfSubsidiaryLetters("bcd").keys()).toContain("d");
  });

  it("counts 1 b, 2 c's & 3 d's in bccddd", () => {
    expect(getMapOfSubsidiaryLetters("bccddd").get("b")).toBe(1);
    expect(getMapOfSubsidiaryLetters("bccddd").get("c")).toBe(2);
    expect(getMapOfSubsidiaryLetters("bccddd").get("d")).toBe(3);
  });
});

describe("isLessThanTarget", () => {
  it("is True where char is a and target is b", () => {
    expect(isLessThanTarget("a", "b")).toBe(true);
  });

  it("is False where char is z and target is a", () => {
    expect(isLessThanTarget("z", "a")).toBe(false);
  });
});

describe("factorial", () => {
  it("returns 1 when argument is 0", () => {
    expect(factorial(1)).toBe(1);
  });

  it("returns 1 when argument is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("returns 2 when argument is 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("returns 6 when argument is 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("returns 24 when argument is 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("returns 120 when argument is 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("returns 5040 when argument is 7", () => {
    expect(factorial(7)).toBe(5040);
  });

  it("returns 620448401733239439360000 when argument is 24", () => {
    expect(factorial(24)).toBe(620448401733239439360000);
  })
});
