const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('pages/index');
});
app.post('/login', function (req, res) {
    const form_data = req.body;
    console.log(req.body);
    if (form_data && form_data.username === "case") {
        if (form_data.password === "wintermute") {
            res.send("here's your flag: oposec{happybday}");
        } else {
            res.send("password is not correct");
        }
    } else {
        res.send("user or password is not correct");
    }
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))