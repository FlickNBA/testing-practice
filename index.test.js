import { capitalize } from ".";

test("abc to equal Abc", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("b to equal B", () => {
  expect(capitalize("b")).toBe("B");
});

test("123a to equal 123a", () => {
  expect(capitalize("123a")).toBe("123a");
});
