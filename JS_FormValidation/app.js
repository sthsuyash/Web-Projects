const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// specifies static files
app.use(express.static('public'));

// starting server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running at port ${port}...`);
});

// get request 
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

// post request 
app.post('/', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    res.write(`Username: ${username}\n`);
    res.write(`Email: ${email}\n`);
    res.write(`Password: ${password}\n`);
    res.send();
});