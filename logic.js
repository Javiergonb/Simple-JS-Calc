//ADD SUBSTRACT MULT AND DIVISION!
//TODO: DECIMAL OPERAND SUPPORT
//TODO: negative number support

const inputDisplay = document.querySelector("#number-input");
const numberButtons = document.querySelectorAll("#number-button");
const opsButtons = document.querySelectorAll("#ops-button");
const lastOP = document.querySelector("#display");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const delButton = document.querySelector("#del-button");
const operations = ["+","-","*","/"]

let displayedNumber = "0";
let leftOperand;
let righOperand;
let operator;
let operation = "";
let lastPressed;
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
            return (left / right).toFixed(5);
    }
};


//Handler functions

const handleEqual = function(){
    if(!leftOperand || displayedNumber === "" || lastPressed === "="){
        return;
    }
    
    righOperand = displayedNumber;
    operation += " " + righOperand + "=";
    let left = Number(leftOperand);
    let right = Number(righOperand);
    const result = operate(left,right);
    displayedNumber = "";
    updateDisplay(result.toString());
    updateLastOp();
    lastPressed = "="
}

const handleClear = function(){
    lastPressed = "clear"
    operation = null;
    leftOperand=null;
    righOperand=null;
    updateLastOp();
    displayedNumber = ""
    updateDisplay("0");
}

const handleDelete = function(){
    if(displayedNumber === "0" || displayedNumber==="" || lastPressed === "="){
        return;
    }
    if(displayedNumber.length === 1){
        displayedNumber = "";
        updateDisplay("0")
    }else{
        console.log(typeof displayedNumber);
        let number = displayedNumber.slice(0, -1);
        displayedNumber = "";
        updateDisplay(number); 
    }
    lastPressed = "delete";
}

//Setup Functions

const setUpNumberInput = function (){
    numberButtons.forEach((button) =>{
        button.addEventListener("click",(e) => {
            if(lastPressed === "="){
                handleClear();
            }
            let number = button.textContent;
            updateDisplay(number);
            lastPressed = e.target.textContent;
        });
    })
    
}


const setUpOpsInput = function(){
    opsButtons.forEach((button) =>{
        button.addEventListener("click",(e) =>{
            if(operations.includes(lastPressed)){
                return;
            }
            leftOperand = displayedNumber;
            operator = e.target.textContent;
            operation = leftOperand + " " + operator;
            updateLastOp();
            displayedNumber = "";
            lastPressed = operator;
        })
    })
}

const setUpEqualInput = function() {
    equalButton.addEventListener("click", handleEqual)
}

const setUpClearInput = function(){
    clearButton.addEventListener("click",handleClear)
}

const setUpDeleteInput = function() {
    delButton.addEventListener("click",handleDelete)
}

setUpDeleteInput();
setUpClearInput();
setUpNumberInput();
setUpOpsInput();
setUpEqualInput();