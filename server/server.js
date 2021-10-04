const express = require('express');
const app = express();

// app.use 
app.use(express.static('./server/public'));

app.use(express.urlencoded({extended: true}));


app.get('/calculate', (req,res) => {
    console.log('sending data'); 
    res.send(calculation);
})


// listening for requests
const port = 5000;
app.listen(port, () => {
    console.log('App is up and running!');
});


