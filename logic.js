class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.readyToReset = false;
    this.scientific = false;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
      this.currentOperand =  this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (
      (number === "." && this.currentOperand.includes(".")) ||
      (number === "0" && this.currentOperand[0] === "0") ||
      (number === "00" && this.currentOperand === "")
    )
      return;
   
      this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  scientificOperation(scientificOperator){
    this.clear();
    this.currentOperand = scientificOperator+"[" ;
   
   }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    if(this.scientific === true) {
    //  console.log(this.currentOperand);
      let scientificOperator = this.currentOperand.split('[');
     // console.log(scientificOperator);

      switch(scientificOperator[0]){
        case "sin":
        result = Math.sin(scientificOperator[1]);
        break;
        case "cos":
          result = Math.cos(scientificOperator[1]);
        break;
        case "tan":
          result = Math.tan(scientificOperator[1]);
        break;
        case "Log(2)":
          result = Math.log2(scientificOperator[1]);
        break;
        case "Log(10)":
          result = Math.log10(scientificOperator[1]);
        break;
        case "Fact(!)":
          let n = scientificOperator[1];
          function factorial(num){
            if (num <= 1) {
                return 1;
            } else {
                return num * factorial(num-1);
            }
        }
        result = factorial(n);
           
        break;
        case "√":
          result = Math.sqrt(scientificOperator[1]);
        break;
        case "∛":
          result = Math.cbrt(scientificOperator[1]);
        break;
        default:
        return;

      }

    }
else {
  let previous = parseFloat(this.previousOperand);
  let current = parseFloat(this.currentOperand);
  if (isNaN(previous) || isNaN(current)) return;
  switch (this.operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "÷":
      result = previous / current;
      break;
    case "mod":
      result = previous % current;
      break;
    case "^":
      result = Math.pow(previous, current);
      break;
      case "%":
        result = (previous/100) * current;
        break;        
    default:
      return;
  }
}
 

    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
    this.readyToReset =  true;
    this.scientific = false;
  }

  updateDisplay() {

  this.currentOperandText.innerText = this.currentOperand;
    if(this.operation != null){
        this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
    }
   
    else this.previousOperandText.innerText = "";

  
  }
}

const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const scientificButtons = document.querySelectorAll("[data-scientific]");
const clearAllButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");

const calc = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if(calc.previousOperand === "" &&
    calc.currentOperand !== "" &&
calc.readyToReset) {
        calc.currentOperand = "";
        calc.readyToReset = false;
    }
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.chooseOperation(button.innerText);
    calc.updateDisplay();
  });
});


scientificButtons.forEach(button => {
  button.addEventListener("click", () => {
    calc.scientificOperation(button.innerText);
    calc.scientific= true;
    calc.updateDisplay();
  });
});


equalsButton.addEventListener("click", () => {
  calc.compute();
  calc.updateDisplay();
});

clearAllButton.addEventListener("click", () => {
    calc.clear();
    calc.updateDisplay();
  });

  deleteButton.addEventListener("click", () => {
    calc.delete();
    calc.updateDisplay();
  }); 
