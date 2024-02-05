var { wordPattern } = require("../wordPattern.js");

test("wordPattern", () => {
  expect(wordPattern('abba', "dog cat cat dog")).toBe(true);
});

test("wordPattern", () => {
  expect(wordPattern('abba', "dog cat cat fish")).toBe(false);
});

test("wordPattern", () => {
  expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
});
