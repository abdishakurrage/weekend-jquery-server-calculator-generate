
$(document).ready(onReady);
$(document).ready(getMathData());

let operationVariable; // history

function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}

function clearInputs() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('#numberOne').ready();
}

// get click operations
function getClickedOperation() {
    if ($(this).is('#plusBtn')) {
        operationVariable = '+';
    }
    else if ($(this).is('#minusBtn')) {
        operationVariable = '-';
    }
    else if ($(this).is('#multiplyBtn')) {
        operationVariable = '*';
    }
    else if ($(this).is('#divideBtn')) {
        operationVariable = '/';
    }
}

// post function 
function sendMath() {
    console.log('inside sendMath');

    let mathCalc = {
        numberOne: $('#numberOne').val(),
        numberTwo: $('#numberTwo').val(),
        data: operationVariable
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


// for loop
// append items
function getMathData() {
    console.log('getMathData');

    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then((response) => {
        console.log('GET /calculate response', response);
        let calcList = $('#mathHistory');
        let answer = $('#answer ');
        calcList.empty();
        answer.empty();

        for (let calc of response) {
            answer.empty();
            calcList.append(`
                <li>
                    ${calc.numberOne} ${calc.data} ${calc.numberTwo} = ${calc.answer}
                </li>
            `);
            answer.append(calc.answer);
        }
    })
}




// clear in put fields

// function clearInputs() {
//     $('#numberOne').val('');
//     $('#numberTwo').val('');
//     $('#numberOne')();
// }