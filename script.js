let operand = "" ; let num1 = ""; let num2 = "" ; let answer; let equation = "";

const display = document.querySelector(".display");
const nums = document.querySelectorAll("#num");
nums.forEach(num => {
    num.addEventListener('click', numClick)
})

const operands = document.querySelectorAll("#operand")
operands.forEach(oper => {
    oper.addEventListener('click', operandClick)
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", eqClick);


function operate (num1, operand, num2){
    if(operand === "+")
    answer = add(num1, num2).toFixed(2);
    if(operand === "-")
    answer = subtract(num1, num2).toFixed(2);
    if(operand === "*")
    answer = multiply(num1, num2).toFixed(2);
    if(operand === "/")
    answer = divide(num1, num2).toFixed(2);
    return answer;
}

function numClick(event){
    if(operand !== ""){
        num2 += event.target.textContent;
        displayOut(num2);
        return;
    }
    num1 += event.target.textContent;
    displayOut(num1);
}

function operandClick(event){
    if(operand !== ""){
        num1 = 
    }
    operand = event.target.textContent;
    displayOut(operand)
}

function eqClick(event){
    equation = num1 + " " + operand + " "  + num2 + " " + "=" + " ";
    answer = operate(parseFloat(num1),operand,parseFloat(num2));
    displayOut(equation + answer);
    num1 = answer; num2 = "";
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function displayOut (output){
    display.textContent = output;
}