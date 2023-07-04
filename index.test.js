import { Calculator, capitalize, reverseString, caesarCipher, analyzeArray } from ".";

test("abc to equal Abc", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("b to equal B", () => {
  expect(capitalize("b")).toBe("B");
});

test("123a to equal 123a", () => {
  expect(capitalize("123a")).toBe("123a");
});

// //

test("123a to equal 321a", () => {
  expect(reverseString("123a")).toBe("a321");
});

test("Abc to equal cbA", () => {
  expect(reverseString("Abc")).toBe("cbA");
});

test("g to equal g", () => {
  expect(reverseString("g")).toBe("g");
});

// //

let calc = new Calculator();

test("2+3 = 5", () => {
  expect(calc.add(2, 3)).toBe(5);
});

test("3.3 + 2.1 = 5.4", () => {
  expect(calc.add(3.3, 2.1)).toBe(5.4);
});

// //

// test("3-2 = 1", () => {
//   expect(calc.subtract(3, 2)).toBe(1);
// });

// // test("3.3 - 2.1 = 1.2", () => {
// //   expect(calc.subtract(3.3, 2.1)).toBe(1.2);
// // });

// test("2-3 = -1", () => {
//   expect(calc.subtract(2, 3)).toBe(-1);
// });

// //

test("3/2 = 1.5", () => {
  expect(calc.divide(3, 2)).toBe(1.5);
});

test("2-3 = -0.667", () => {
  expect(calc.divide(2, 3)).toBe(2 / 3);
});

test("350/100 = 3.5", () => {
  expect(calc.divide(350, 100)).toBe(3.5);
});

// //

test("3*2 = 6", () => {
  expect(calc.multiply(3, 2)).toBe(6);
});

test("2*30 = 60", () => {
  expect(calc.multiply(2, 30)).toBe(60);
});

test("350*100 = 35000", () => {
  expect(calc.multiply(350, 100)).toBe(35000);
});

// //

test("abcd(1) => bcde", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("abcd abcd(1) => bcde bcde", () => {
  expect(caesarCipher("abcd abcd", 1)).toBe("bcde bcde");
});

test("xyz(1) => yza", () => {
  expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("ABC, Haha(6) => yza", () => {
  expect(caesarCipher("ABC, Haha", 6)).toBe("GHI, Ngng");
});

test("Lorem ipsym!(13) => Yberz vcfhz!", () => {
  expect(caesarCipher("Lorem ipsum!", 13)).toBe("Yberz vcfhz!");
});

test("as8ygdiasd vaosbd32132(24) => yq8webgyqb tymqzb32132", () => {
  expect(caesarCipher("as8ygdiasd vaosbd32132", 24)).toBe("yq8webgyqb tymqzb32132");
});

// //

test("[1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("[7, 2, 3, 7, 1, 5, 10]", () => {
  expect(analyzeArray([7, 2, 3, 7, 1, 5, 10])).toStrictEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 7,
  });
});
