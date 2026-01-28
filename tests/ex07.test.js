const {checkAir, ErrorMessages} = require("../exercises/ex07");

test("return Polluted if dirty % > treshold", () => {
  expect(
    checkAir(
      [
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
        "clean",
        "clean",
        "dirty",
        "clean",
        "dirty",
      ],
      0.3
    )
  ).toBe("Polluted");
});
test("return Polluted if dirty % > treshold", () => {
  expect(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)).toBe(
    "Polluted"
  );
});
test("return Clean if dirty % < treshold", () => {
  expect(
    checkAir(
      ["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"],
      0.9
    )
  ).toBe("Clean");
});

test("return error message if samples is not an array", () => {
  expect(checkAir("invalid samples", 0.5)).toBe(
    ErrorMessages.INVALID_SAMPLES_ARRAY
  );
});

test("return error message if samples array does not contain 'clean' or 'dirty' strings", () => {
  expect(checkAir(["invalid", "clean", "array"], 0.5)).toBe(
    ErrorMessages.SAMPLES_MUST_CONTAIN_CLEAN_OR_DIRTY
  );
});

test("return error message if threshold is less than 0", () => {
  expect(
    checkAir(["clean", "dirty", "clean", "dirty"], -0.1)
  ).toBe(ErrorMessages.INVALID_THRESHOLD);
});

test("return error message if threshold is greater than 1", () => {
  expect(
    checkAir(["clean", "dirty", "clean", "dirty"], 1.1)
  ).toBe(ErrorMessages.INVALID_THRESHOLD);
});
