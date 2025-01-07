//ADD SUBSTRACT MULT AND DIVISION!
//TODO: DECIMAL OPERAND SUPPORT

const inputDisplay = document.querySelector("#number-input");
const numberButtons = document.querySelectorAll("#number-button");
const opsButtons = document.querySelectorAll("#ops-button");
const lastOP = document.querySelector("#display")
const equalButton = document.querySelector("#equal-button")

let displayedNumber = "0";
let leftOperand;
let righOperand;
let operator;
inputDisplay.value = displayedNumber


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


//Logic Functions
const operate = function(leftOperand,righOperand,operator){
    switch(operator){
        case '+' :
            return leftOperand + righOperand;
        
        case '-':
            return leftOperand - righOperand;

        case '*':
            return leftOperand * righOperand;

        case '/':
            return leftOperand / righOperand;
    }
};
//Setup Functions

const setUpNumberInput = function (){
    numberButtons.forEach((button) =>{
        button.addEventListener("click",(e) => {
            let number = button.textContent;
            updateDisplay(number);
            lastPressed = e.target.textContent;
        });
    })
    
}


const setUpOpsInput = function(){
    opsButtons.forEach((button) =>{
        button.addEventListener("click",(e) =>{
            if(lastPressed)
            leftOperand = displayedNumber;
            operator = e.target.textContent;
            displayedNumber = ""
            
        })
    })
}

const setUpEqualInput = function() {
    equalButton.addEventListener("click", handleEqual())
}

setUpNumberInput();
setUpOpsInput();