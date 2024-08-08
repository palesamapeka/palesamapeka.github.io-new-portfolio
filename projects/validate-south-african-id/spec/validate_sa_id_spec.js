const { isIdNumberValid } = require("../src/validate_sa_id.js");

describe("isIdNumberValid", function () {
  it("should return false when the ID Number is shorter than 13 characters", function () {
    expect(isIdNumberValid("283156")).toBe(false);
  });
  it("should return false when the ID Number is longer than 13 characters", function () {
    expect(isIdNumberValid("970812041908514715")).toBe(false);
  });
  it("should return false when the ID Number contains characters that are not numbers", function () {
    expect(isIdNumberValid("9708120Lhb$89")).toBe(false);
  });
  it("should return false when the month is greater than 12", function () {
    expect(isIdNumberValid("9713120419089")).toBe(false);
  });
  it("should return false when the month is February and the days exceed 28", function () {
    expect(isIdNumberValid("9702290419089")).toBe(false);
  });
  it("should return false when the month is February and the day is 29 and it's not a leap year", function () {
    expect(isIdNumberValid("0502295044083")).toBe(false);
  });
  it("should return true when the month is February and the day is 29 and it's a leap year", function () {
    expect(isIdNumberValid("0402295044083")).toBe(true);
  });
  it("should return false when the number denoting the day exceeds 31", function () {
    expect(isIdNumberValid("2001324800086")).toBe(false);
  });
  it("should return false when the checksum value is invalid", function () {
    expect(isIdNumberValid("2001014800386")).toBe(false);
  });
  it("should return true when the ID number is valid", function () {
    expect(isIdNumberValid("2001014800086")).toBe(true);
  });
  it("should return false when the ID number is not a string", function () {
    expect(isIdNumberValid(2001014800086)).toBe(false);
  });
  it("should return false when the ID number is not valid", function () {
    expect(isIdNumberValid("0000000000000")).toBe(false);
  });
});
