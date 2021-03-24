//testing JS
//console.log('hi');

$(document).ready(function () {

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = 0;
let isOperatorChosen = false; // in the beginning no #s are chosen
let isCalculated = false; // in the beginning nothing is calculated

// start calculator - initalization
// when someone hits clear button (reset)
// 

function initCalculator (){
//setup some initial data
    firstNumber= '';
    secondNumber= '';
    operator = '';
    result = 0;
    isOperatorChosen = false; 
    isCalculated = false;
    $('#first-number, #second-number, #operator, #result').empty();
}
// TODO: update the UI by clearing the results card
// 4 different elements
// numbers, operators, equal, and clear

//Event Handlers

$('.number').on('click', function (evt){
    //check if operator chosen
    //yes --- we should render the second number
    //no ---- we should be rending the first number
    if(isOperatorChosen){
        secondNumber += $(this).val();
        $('#second-number').text(secondNumber);
        //Todo = display the secondNumber on the page for the user
    } else {
        firstNumber +=$(this).val();
        $('#first-number').text(firstNumber); //display the text
    }
});

$('.operator').on('click', function (evt){
// let program know operator was clicked
// check if we've already calculated OR first number has not been chosen
// Yes - do nothing
// No -- proceed as usual 
if (!firstNumber || isCalculated) {
    return false;
}
    isOperatorChosen = true;
    operator = $(this).val();
    $('#operator').text($(this).text()); //displays the number
});

$('.equal').on('click', function (evt){
  
// has the calculation on the current set of numbers already finished
// YES -- do nothing
// NO -- then I'm going to set isCalculated to True
// 2- convert to numbers from string so we can do math ---> Float
// 3- check what operator is chosen
// 4- perform the operation on 2 numbers and save it to the results variable
// 5- display results --> render

//1-yes 
    if(isCalculated || !secondNumber){
        return false;
    }
// 1- no
    isCalculated = true;

// 2
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber);

// 3 & 4 (if else)
    switch (operator) {
        case 'plus':
            result = firstNumber + secondNumber;
            break;
        case 'minus':
            result = firstNumber - secondNumber;
            break;
        case 'times':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            result = firstNumber / secondNumber;
            break;
        case 'power': 
        result = firstNumber ** secondNumber; 
            break;     
        default: 
            operator;
    }
// 5
    $('#result').text(result);
});

$('.clear').on('click', function (evt){
    initCalculator();
});

// Run the app
initCalculator();

});