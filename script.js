let operand; let num1; let num2; let answer = 0; let equation = ""; let outcome;

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

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearCalc)


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
    equation += event.target.textContent;
    displayOut(equation);
}

function operandClick(event){
    equation = equation + " " + event.target.textContent + " ";
    displayOut(equation);
}

function eqClick(event){
    const arrEq = equation.split(" ")
    const fullEq = arrEq.join(" ") + " = ";
    for(let i = 0; i<arrEq.length-2; i+=2){
        outcome = operate(parseFloat(arrEq[i]), arrEq[i+1], parseFloat(arrEq[i+2]));
        arrEq[i+2] = outcome;
    }
    if(outcome === "undefined" || outcome === "NaN"){
        outcome = "ERROR"
    }
    displayOut(fullEq + outcome);
    equation = outcome;
    outcome = 0;
}
function clearCalc(event){
    equation = "";
    outcome = 0;
    displayOut(equation);
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