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

function getMathData() {
    console.log('getMathData');
    
        $.ajax({
            method: 'GET',
            url: '/calculate'
        }).then((response) => {
        console.log('GET /calculate response', response);
        let calcList = $('#mathHistory');
        let results = $('#results'); // results
        calcList.empty();
        results.empty();

        for (let calc of response) { 
            results.empty(); // results
            calcList.append(`
                <li>
                    ${calc.numberOne} ${calc.data} ${calc.numberTwo} = ${calc.results}
                </li>
            `);
            results.append(calc.results); //
        }
    })
 }




// clear in put fields

function clearInputs() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('#numberOne')();
}