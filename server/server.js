const express = require('express');
const app = express();

const calculation = [];

// app.use 
app.use(express.static('./server/public'));

app.use(express.urlencoded({extended: true}));

// calculate for each operation 
function doMath() {
    let result = 0;
    if (data === '+') {
        result = Number(numberOne) + Number(numberTwo);
    }



app.post('/calculate', (req,res) => {
    console.log('in post /calculate'); 
    let mathCalc = req.body; 
    let results = doMath(mathCalc);
    mathCalc.results = results; 
    console.log('req.body is ', mathCalc); 
    calculation.push(mathCalc); 
    res.send(200);

}) // sends status



app.get('/calculate', (req,res) => {
    console.log('sending data'); 
    res.send(calculation);
})


// listening for requests
const port = 5000;
app.listen(port, () => {
    console.log('App is up and running!');
});


