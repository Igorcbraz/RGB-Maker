// Checking if the HTML stay already loaded
window.addEventListener('load', start);

// Get the root element
let root = document.querySelector(':root');

// Range inputs
let range = new Array;
range[0] = document.getElementById('rangeRed');
range[1] = document.getElementById('rangeGreen');
range[2] = document.getElementById('rangeBlue');

// Input text for the rgb values
let result = new Array;
result[0] = document.getElementById('redValue');
result[1] = document.getElementById('greenValue');
result[2] = document.getElementById('blueValue');

// rgb variables 
let r,g,b = 0;

function start(){
    // Adding the EventListener for all range inputs and call currentValue function
    for(let i = 0; i < range.length; i++){
        range[i].addEventListener('input', currentValue);
    }
}

function currentValue(){
    //Saving the inputs (range) value
    r = result[0].value;
    g = result[1].value;
    b = result[2].value;

    //Printing the results in the users screen
    for(let i = 0; i < range.length; i++){
        result[i].value = range[i].value;
    }

    //Putting the save values (r,g,b) in the css "result" variable
    root.style.setProperty('--result', `rgb(${r}, ${g}, ${b})`);
}

//Favorite colors
let rgb = new Array;
let cont = 0;
function favorite(){
    rgb[cont] = `rgb(${r}, ${g}, ${b})`
    root.style.setProperty('--favorite' + cont, rgb[cont]);

    cont++;
}