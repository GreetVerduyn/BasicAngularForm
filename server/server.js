const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{fName: 'Coach', lName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', signatureMove: 'Yeet', language: 'Javascript'}];


app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.get('/allFriends', function (request, response) {
    response.send(allFriends);
});

app.post('/addFriend', function (request, response) {
    console.log('addFriend', request.body);
    allFriends.push(
        {
            fName: request.body.firstName,
            lName: request.body.lastName,
            email: request.body.email,
            phone: request.body.phone,
            language: request.body.favouriteLanguage
        }
    );
    response.send(allFriends);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});


app.listen(PORT, function () {});
