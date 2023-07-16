const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const https = require('https');
const { response } = require('express');

// specifies static files
app.use(express.static('public'));

/***** server listen *****/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});

/***** GET request *****/
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/signUp.html`);
});

/***** POST request *****/
app.post('/', (req, res) => {
    const FIRST_NAME = req.body.first_name;
    const LAST_NAME = req.body.last_name;
    const EMAIL = req.body.email;
    /*
    console.log(`First Name: ${FIRST_NAME}`);
    console.log(`Last Name: ${LAST_NAME}`);
    console.log(`Email: ${EMAIL}`);
    */
    const data = {
        members: [
            {
                email_address: EMAIL,
                status: 'subscribed',
                merge_fields: {
                    FNAME: FIRST_NAME,
                    LNAME: LAST_NAME
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = `https://us14.api.mailchimp.com/3.0/lists/8c33d4b693`
    const options = {
        method: "POST",
        auth: ""
    }

    const request = https.request(url, options, (response) => {
        response.statusCode === 200 ? res.sendFile(`${__dirname}/success.html`) : res.sendFile(`${__dirname}/failure.html`);

        // response.on('data', (d) => {
        //     // console.log(JSON.parse(d));
        // });
    });

    request.write(jsonData);
    request.end();

});

app.post('/re', (req, res) => {
    res.redirect(`/`);
});
