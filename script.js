const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  console.log(numbers);
});

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("number is pressed");
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

// let prevNumber = "";
// let calculationOperator = "";
// let currentNumber = "";

/* INPUT NUMBER */
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

/* OPERATOR */

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    // console.log(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  curruntNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  console.log("equal button is pressed");
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  curruntNumber = "0";
};
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  console.log("AC button is pressed");
});

const decimal = document.querySelector(". decimal");

decimal.addEventListener("click", (event) => {
  // console.log(event.target.value)
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  currentNumber += dot;
};
