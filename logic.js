//ADD SUBSTRACT MULT AND DIVISION!
//TODO: DECIMAL OPERAND SUPPORT

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