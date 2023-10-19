let display = document.getElementById("display");

display.value = 0;
let content = '';
let lastResult = '';

//This is code for autocalculate (25+5+ (30+))
function displayValue(value) {
    if(value.match(/[+\-*\/]$/)) {
        if(content.match(/[+\-*\/]$/)) {
            content = content.slice(0, -1);
        }
            lastResult = eval(content);
            display.value = lastResult + value;
            content = lastResult + value
        } else {
            content =  content + value; 
            display.value = content;   
    }
}

function clearDisplay() {
    display.value = '0';
    content = '';
}

function resultDisplay() {
    try {    
        lastResult = eval(content);
        display.value = lastResult;
    } catch {
        display.value = 'Error';
        content = '';
    }
}