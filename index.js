const express = require('express');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
const user = "CASE";
const pwd = "WINTERMUTE";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send('<!DOCTYPE html><html><body style="background-color:black"><img style="width:350px; position: absolute; top:50px; left: calc(50% - 175px);" src="https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg"/></body></html>');
});

app.get('/login', function (req, res) {
    res.send('We\'re working on it ... coming soon');
});

app.post('/login', function (req, res) {
    const form_data = req.body;
    console.log(form_data);
    if (form_data && form_data.username && form_data.username.toUpperCase() === user) {
        if (form_data.password && form_data.password.toUpperCase() === pwd) {
            res.send("here's your flag: oposec{happybday}");
        } else {
            res.send("password is not correct");
        }
    } else {
        res.send("user or password is not correct");
    }
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))