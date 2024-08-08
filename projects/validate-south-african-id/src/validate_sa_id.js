function isIdNumberValid(idNumber) {
  if (checkDataType(idNumber) !== "string") {
    return false;
  } else {
    const numRegex = /^[0-9]+$/;
    const citizenshipNum = parseInt(idNumber.substring(10, 11));
    return (
      idNumber.length === 13 &&
      numRegex.test(idNumber) &&
      checkDateOfBirth(idNumber) &&
      (citizenshipNum === 0 || citizenshipNum === 1) &&
      checkSumDigit(idNumber)
    );
  }
}

function checkDataType(dataType) {
  return typeof dataType;
}

function checkDateOfBirth(idNumber) {
  const year = idNumber.substring(0, 2);
  const month = idNumber.substring(2, 4);
  const day = idNumber.substring(4, 6);
  if (
    day === 0o0 ||
    day > 31 ||
    month > 12 ||
    month < 1 ||
    (month === 2 && day > 29) ||
    (year % 4 !== 0 && month === 2 && day > 28) ||
    (month === (4 || 6 || 9 || 11) && day > 30)
  ) {
    return false;
  }
  return true;
}

function checkSumDigit(idNumber) {
  let digits = idNumber.split("").map((i) => Number(i));
  let sum = 0;

  if (digits.length % 2 === 0) return false;

  digits = digits
    .map((digit, index) => (index % 2 === 1 ? digit * 2 : digit))
    .map((digit) => (digit > 9 ? digit - 9 : digit));
  sum = digits.reduce((total, curr) => (total += curr), 0);
  return sum % 10 === 0;
}

module.exports = {
  isIdNumberValid,
};