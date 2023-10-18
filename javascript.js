let display = document.getElementById("display");

display.value = 0;
let content = '';
let lastResult = '';

function displayValue(value) {
    if(value.match(/[+\-*\/]$/) && content.match(/[+\-*\/]$/)) {
    return;
}
    content =  content + value; 
    display.value = content;   
}

function clearDisplay() {
    display.value = '0';
    content = '';
}

function resultDisplay() {
    try { 
        
        lastResult = eval(content);
        display.value = lastResult;
    } catch{
        display.value = 'Error';
        content = '';
    }
}