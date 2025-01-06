//ADD SUBSTRACT MULT AND DIVISION!

let operate = function(leftOperand,righOperand,operator){
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