function listPosition(word) {
  let position = 1;
  while(word.length > 1) {
    const length = word.length;
    const denominator = getDenominator(word);
    position += (factorial(length) / denominator) * (countLowerValueChars(word) / length);
    word = word.substring(1);
  }
  return position;
}

const countLowerValueChars = (charString) => {
  let count = 0;
  const target = charString[0];
  const subs = charString.substring(1);
  subs.split("").forEach(char => {
    if (isLessThanTarget(char, target)) {
      count++;
    }
  });
  return count;
};

const getDenominator = (charString) => {
  let denom = 1;
  const duplicates = getArrayOfDuplicates(charString);
  duplicates.map(val => denom *= factorial(val));
  return denom;
};

const getArrayOfDuplicates = (charString) => {
  const charsMap = getMapOfSubsidiaryLetters(charString);
  const duplicatesArray = [];
  charsMap.forEach((val) => {
    if (val > 1) {
      duplicatesArray.push(val);
    }
  });
  // console.log("Duplicates array:", duplicatesArray);
  return duplicatesArray;
};

const getMapOfSubsidiaryLetters = (chars) => {
  const subs = new Map();
  chars.split("").forEach(char => {
    if (subs.has(char)) {
      const currentCharCount = subs.get(char);
      subs.set(char, currentCharCount + 1);
    } else {
      subs.set(char, 1);
    }
  });
  return subs;
};

const isLessThanTarget = (char, target) => {
  return char < target;
};

const factorial = (n) => {
  if (n === 0)
    return 1;
  if (n === 1)
    return 1;
  return (n * factorial(n - 1));
};

module.exports = {
  listPosition,
  countLowerValueChars,
  getDenominator,
  getArrayOfDuplicates,
  getMapOfSubsidiaryLetters,
  isLessThanTarget,
  factorial
};