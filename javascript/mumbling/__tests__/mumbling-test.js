const Mumbling = require("../src/mumbling");

const mumbling = new Mumbling();

describe("Mumbling object", () => {
  it("can be instantiated", () => {
    expect(mumbling).toBeInstanceOf(Object);
  });
});

describe("convertChar", () => {
  it("returns Zz whare char is z and index is 1", () => {
    expect(mumbling.convertChar("z", 1)).toBe("Zz");
  });

  it("returns Xxxxxx where chare is x and index is 5", () => {
    expect(mumbling.convertChar("x", 5)).toBe("Xxxxxx");
  });
});

describe("String conversion", () => {
  it("returns an empty string if empty string is input", () => {
    expect(mumbling.convert("")).toBe("");
  });

  it("returns A when input is a", () => {
    expect(mumbling.convert("a")).toBe("A");
  });

  it("returns A when input is A (uppercase)", () => {
    expect(mumbling.convert("A")).toBe("A");
  });

  it("returns A-Bb when input is ab", () => {
    expect(mumbling.convert("ab")).toBe("A-Bb");
  });

  it("returns A-Bb-Ccc when input is aBc", () => {
    expect(mumbling.convert("aBc")).toBe("A-Bb-Ccc");
  });

  it("works for the Codewars examples", () => {
    expect(mumbling.convert("ZpglnRxqenU")).toBe("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
    expect(mumbling.convert("NyffsGeyylB")).toBe("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
    expect(mumbling.convert("MjtkuBovqrU")).toBe("M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
    expect(mumbling.convert("EvidjUnokmM")).toBe("E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
    expect(mumbling.convert("HbideVbxncC")).toBe("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
  })
});
