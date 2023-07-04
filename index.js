export const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const reverseString = (string) => {
  return [...string].reverse().join("");
};

export class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }

  subtract(n1, n2) {
    return n1 - n2;
  }

  divide(n1, n2) {
    return n1 / n2;
  }

  multiply(n1, n2) {
    return n1 * n2;
  }
}

export const caesarCipher = (string, move) => {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let newString = "";

  [...string].forEach((letter) => {
    let isUppercase = letter == letter.toUpperCase() ? true : false;
    let index = alphabet.indexOf(letter.toUpperCase());
    if (index == -1) {
      newString += letter;
    } else {
      let newIndex = index + move;
      if (index + move > alphabet.length - 1) {
        newIndex = index + move - alphabet.length;
      }
      newString += isUppercase ? alphabet[newIndex] : alphabet[newIndex].toLowerCase();
    }
  });

  return newString;
};

export const analyzeArray = (array) => {
  return {
    min: Math.min.apply(Math, array),
    max: Math.max.apply(Math, array),
    average: array.reduce((acc, value) => acc + value, 0) / array.length,
    length: array.length,
  };
};
