import * as challenge from "./js11";

describe('Greeting', () => {
  test('Should return correct string', () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you")
  });
})

describe('Should add two numbers together and return the sum', () => {
  test('Return the sum', () => {
    expect(challenge.sumTwoNumbers(3, 7)).toEqual(10)
  });
});


describe('Compare two numbers and return a string', () => {
  test('Both numbers are equal', () => {
    expect(challenge.checkLarger(4, 4)).toEqual("Both numbers are equal");
  });

  test('First number is larger than second number', () => {
    let firstNumber = 7;
    let secondNumber = 2;
    expect(challenge.checkLarger(firstNumber, secondNumber)).toEqual(`${firstNumber} is bigger than ${secondNumber}`);
  });

  test('Second number is larger than first number', () => {
    let firstNumber = 7;
    let secondNumber = 11;
    expect(challenge.checkLarger(firstNumber, secondNumber)).toEqual(`${secondNumber} is bigger than ${firstNumber}`);
  });
});

test("Should return new array of names based on length", () => {
  expect(challenge.filterByLength(["Paul", "Calum", "Rebecca"])).toMatchObject(["Paul", "Calum"]);
  expect(challenge.filterByLength(["Johnathan", "Sylvester", "Charlie"])).toBe("Sorry, no valid names supplied");
  expect(challenge.filterByLength(["Tom", "Dick", "Harry"])).toMatchObject(["Tom", "Dick", "Harry"]);
});

test("Should reduce all numbers correctly", () => {
  expect(challenge.reduceNumbers([255, 230, 30], 10)).toMatchObject([245, 220, 20]);
  expect(challenge.reduceNumbers([40, 30, 20], 50)).toMatchObject([0, 0, 0]);
  expect(challenge.reduceNumbers([300, 310, 320], 40)).toMatchObject([255, 255, 255]);
});