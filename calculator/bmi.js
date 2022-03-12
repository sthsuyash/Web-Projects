const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// for home dir '/'
app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post('/', function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height * height);
    res.send(`BMI: ${bmi}`);
})

// for '/calculator' directory from home
app.get('/calculator', function (req, res) {
    res.sendFile(`${__dirname}/calculator.html`);
})

app.post('/calculator', function (req, res) {
    let first = Number(req.body.first);
    let second = Number(req.body.second);
    res.send(`Sum: ${first + second}`);
})

app.listen('3000', function () {
    console.log('Server running at port 3000.');
})