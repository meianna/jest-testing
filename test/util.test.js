const { add, minus } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if the first arugment is not a number", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if the first arugment is not a number", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments were received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the first argument minus the second", () => {
      expect(minus(4, 2)).toBe(2);
    });
  });
  describe("Fail", () => {
    it("Should return an error if the first argument is not a number", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should return an error if the first argument is not a number", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
  });
});
