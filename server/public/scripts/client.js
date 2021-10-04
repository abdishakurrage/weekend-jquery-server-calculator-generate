$(document).ready(onReady);

let operation; // history

function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}

// get click operations
function getClickedOperation() {
    if ($(this).is('#plusBtn')) {
        operation = '+';
    }
    else if ($(this).is('#minusBtn')) {
        operation = '-';
    }
    else if ($(this).is('#multiplyBtn')) {
        operation = '*';
    }
    else if ($(this).is('#divideBtn')) {
        operation = '/';
    }
}

// post function 
function sendMath() {
    console.log('sendMath');

    let mathCalc = {
        numberOne: $('#numberOne').val(),
        numberTwo: $('#numberTwo').val(),
        data: operation
    };
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathCalc
    }).then((response) => {
        console.log('is response ', response);
        getMathData();
    });
}






// clear in put fields

function clearInputs() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('#numberOne')();
}