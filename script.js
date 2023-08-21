let operand; let num1; let num2; let answer;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', buttonClick)
})


function operate (num1, operand, num2){
    if(operand === "+")
    answer = add(num1, num2);
    if(operand === "-")
    answer = subtract(num1, num2);
    if(operand === "*")
    answer = multiply(num1, num2);
    if(operand === "/")
    answer = divide(num1, num2);
}
function buttonClick(event){
    displayOut(event.target.textContent);
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