const express = require('express');

const app = express();

const calculation = [];

// app.use 
app.use(express.static('./server/public'));
app.use(express.urlencoded({ extended: true }));

// calculate for each operation 
function doMath(object) {
    let result = 0;
    if (object.data === '+') {
        result = Number(object.numberOne) + Number(object.numberTwo);
    } else if (object.data === '-') {
        result = Number(object.numberOne) - Number(object.numberTwo);
    } else if (object.data === '*') {
        result = Number(object.numberOne) * Number(object.numberTwo);
    } else if (object.data === '/') {
        result = Number(object.numberOne) / Number(object.numberTwo);
    } return result;
}

app.post('/calculate', (req, res) => {
    console.log('post /calculate');
    let mathCalc = req.body;
    let answer = doMath(mathCalc);
    mathCalc.answer = answer;
    console.log('req.body is ', mathCalc);
    calculation.push(mathCalc);
    res.send(200);

}) // sends status

app.get('/calculate', (req, res) => {
    console.log('sending back data');
    res.send(calculation);
})

// listening for requests
const port = 5000;
app.listen(port, () => {
    console.log('App is up and running');
});
