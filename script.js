
let calculatorContainer = document.createElement('div');
calculatorContainer.className = 'calculatorContainer';
let body = document.querySelector('body');
body.appendChild(calculatorContainer);

let brandContainer = document.createElement('div');
brandContainer.className = 'brandContainer';
brandContainer.textContent = 'Calcuruby';
calculatorContainer.appendChild(brandContainer);

let screen = document.createElement('div');
screen.className = 'screen';
calculatorContainer.appendChild(screen);


let modelNo = document.createElement('div');
modelNo.className = 'modelNo';
modelNo.textContent = 'RBS 2000';
calculatorContainer.appendChild(modelNo);

let buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttonsContainer';
calculatorContainer.appendChild(buttonsContainer);


let buttons = ['AC','C','%','**','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];

let currentInput = '';
let previousInput = '';
let operator = '';
let total = '';

buttons.forEach(value => {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = value;
    
    
    if (value === 'AC' || value === 'C') {
        btn.className = 'btn clear-btn';  
    } else if (value === '=') {
        btn.className = 'btn equals-btn';  
    } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '**' || value === '%') {
        btn.className = 'btn operator-btn';  
        btn.className = 'btn number-btn';  
    }
    
    btn.addEventListener('click', (e) => {
        if (value === 'C'){
            currentInput = '';
            screen.textContent = '0';
        } else if (value === 'AC'){
            currentInput = '';
            previousInput = '';
            screen.textContent = '0';
        } else if (!isNaN(value) || value === '.'){

            currentInput += value;
            screen.textContent = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '**' || value === '%'){
            previousInput = currentInput;
            operator = value;
            currentInput = '';

        }else if (value === '='){
            switch(operator){
                case '+':
                    total = add(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
                case '-':
                    total = subtract(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
                case '*':
                    total = multiply(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
                case '/':
                    total = divide(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
                case '**':
                    total = exponent(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
                case '%':
                    total = modulo(previousInput,currentInput);
                    screen.textContent = total;
                    currentInput = total;
                    break;
            }

        }

    });
    buttonsContainer.appendChild(btn)
})


///operations.
function add(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = number1 + number2;
    return String(total)
}

function multiply(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = number1 * number2;
    return String(total)
}

function divide(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = number1 / number2;
    return String(total)
}

function subtract(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = number1 - number2;
    return String(total)
}

function exponent(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = 1;
    for (let i = 0; i < number2; i++){
        total *= number1;

    }
    return String(total)
}
function modulo(num1,num2){
    let number1 = Number(num1);
    let number2 = Number(num2);
    total = number1 % number2;
    return String(total)
}



