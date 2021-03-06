
$(document).ready(onReady);
$().ready(getMathData());

let operation; // 

// function on ready
// get clicked
function onReady() {
    console.log('on Ready');
    $('#submitBtn').on('click', sendMath);
    $('.operationBtn').on('click', getClickedOperation);
    $('#clearBtn').on('click', clearInputs);
}

// clear in put fields

function clearInputs() {
    $('#numberOne').val('');
    $('#numberTwo').val('');

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
    console.log('inside sendMath');

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
//     $('#numberTwo').val('')
// }