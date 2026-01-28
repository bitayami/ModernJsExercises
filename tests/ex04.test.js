const instructorWithLongestName = require("../exercises/ex04");

test("return instructor object with longest name", () => {
  expect(
    instructorWithLongestName([
      { name: "Samuel", course: "Mobile" },
      { name: "Jeremiah", course: "Web" },
      { name: "Ophilia", course: "Web" },
      { name: "Donald", course: "Web" },
    ])
  ).toStrictEqual({ name: "Jeremiah", course: "Web" });
});

test("return instructor object with longest name", () => {
  expect(
    instructorWithLongestName([
      { name: "Matthew", course: "Web" },
      { name: "David", course: "Mobile" },
      { name: "Domascus", course: "Web" },
    ])
  ).toStrictEqual({ name: "Domascus", course: "Web" });
});

test("return null for empty array", () => {
  expect(instructorWithLongestName([])).toBeNull();
});

test("return the only instructor object for single element array", () => {
  expect(
    instructorWithLongestName([{ name: "Alice", course: "Data Science" }])
  ).toStrictEqual({ name: "Alice", course: "Data Science" });
});
