const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function fact(val){
  let v=1;
  for(let i=1; i<=val; i++){
    v=v*i;
  }
  return v;
}

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;// declaring and initialising multiple variables in one line

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;// if a dot is already not included, include it on pressing the dot button
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } 
  else if (operator) {
    const currentValue = firstOperand || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,

  'sin': (firstOperand, secondOperand) => Math.sin(secondOperand),

  'cos': (firstOperand, secondOperand) => Math.cos(secondOperand),

  'tan': (firstOperand, secondOperand) => Math.tan(secondOperand),

  'root': (firstOperand, secondOperand) => Math.sqrt(secondOperand),

  'sqr': (firstOperand, secondOperand) => secondOperand*secondOperand,

  '!' : (firstOperand,secondOperand)  => fact(secondOperand)
};

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function backspace(){
  const display = document.querySelector('.cal-input');
  size = display.value.length; 
  display.value = display.value.substring(0, size-1);
  calculator.displayValue=display.value;

}

function updateDisplay() {
  const display = document.querySelector('.cal-input');
  display.value = calculator.displayValue;
}
// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

updateDisplay();

// the below given function will perform an event on click of a button, here event is an arrow func(), a shorter way to write a func
const keys = document.querySelector('.cal-btns');
keys.addEventListener('click', (event) => {  // (event)=>{} is same as function event(){}
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) { //classList	Returns the class name(s) of an element
    handleOperator(target.value);
		updateDisplay();
    return;
  }


  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
		updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
		updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    backspace();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});