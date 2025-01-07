//ADD SUBSTRACT MULT AND DIVISION!
//TODO: DECIMAL OPERAND SUPPORT

const inputDisplay = document.querySelector("#number-input");
const numberButtons = document.querySelectorAll("#number-button");
const opsButtons = document.querySelectorAll("#ops-button");
const lastOP = document.querySelector("#display");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const delButton = document.querySelector("#del-button");

let displayedNumber = "0";
let leftOperand;
let righOperand;
let operator;
let operation = "";
inputDisplay.value = displayedNumber;


//Display functions
const updateDisplay = function(number){
    if(displayedNumber === "0"){
        displayedNumber = number;
    }
    else{
        displayedNumber += number;
    }
    inputDisplay.value = displayedNumber;
}

const updateLastOp = function(){
    lastOP.textContent = operation;
}

//Logic Functions
const operate = function(left,right){
    switch(operator){
        case '+' :
            return left + right;
        
        case '-':
            return left - right;

        case '*':
            return left * right;

        case '/':
            return left / right;
    }
};

//Handler functions

const handleEqual = function(){
    righOperand = displayedNumber;
    operation += " " + righOperand + "=";
    let left = parseInt(leftOperand);
    let right = parseInt(righOperand);
    const result = operate(left,right);
    console.log(typeof result);
    displayedNumber = "0";
    updateDisplay(result);
    updateLastOp();
}


//Setup Functions

const setUpNumberInput = function (){
    numberButtons.forEach((button) =>{
        button.addEventListener("click",(e) => {
            let number = button.textContent;
            updateDisplay(number);
        });
    })
    
}


const setUpOpsInput = function(){
    opsButtons.forEach((button) =>{
        button.addEventListener("click",(e) =>{
            leftOperand = displayedNumber;
            operator = e.target.textContent;
            operation = leftOperand + " " + operator;
            updateLastOp();
            displayedNumber = ""
        })
    })
}

const setUpEqualInput = function() {
    equalButton.addEventListener("click", handleEqual)
}

const setUpClearInput = function(){
    clearButton.addEventListener("click",() => {
        operation = null;
        updateLastOp();
        displayedNumber = ""
        updateDisplay("0")
    })
}

setUpClearInput();
setUpNumberInput();
setUpOpsInput();
setUpEqualInput();