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


// export const filterByLength = (names) => {
//  const validNames = names.filter((name) => name.length <= 6);
//  if (validNames[0]) {
//    return validNames;
//  } else {
//    return "Sorry, no valid names supplied";
//  }
// };

describe('Return an array of valid names', () => {
  
  it('Should return valid names', () => {
    const names = ["dexter", "mel"];
    expect(challenge.filterByLength(names[0])).toHaveLength(6)
  });

});