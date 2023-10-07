let display = document.getElementById("display");

let content = '';
display.value = 0;

function displayValue(value) {
    content =  content + value; 
    display.value = content;   
}

function clearDisplay() {
    display.value = '0';
    content = '';
}

function resultDisplay() {
    try { 
        content = eval(content);
        display.value = content;
    } catch{
        display.value = 'Error';
        content = '';
    }
}