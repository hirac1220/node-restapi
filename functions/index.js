const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// local http://localhost:5000/react-firebase-f3f4a/us-central1/api
// firebase https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api

const app = express();
app.use(cors());
app.use(express.json());

const tests = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
];

app.get('/', (req, res) => {
    res.send('node rest api');
});

// get
app.get('/tests', (req, res) => {
    res.send(tests);
});

app.get('/tests/:id', (req, res) => {
    const test = tests.find(c => c.id === parseInt(req.params.id));
    if (!test) return res.status(404).send('Not found.');
    res.send(test);
});

// post
app.post('/tests', (req, res) => {
    const test = {
        id: tests.length + 1,
        name: req.body.name
    };
    tests.push(test);
    res.send(test);
});

// put
app.put('/tests/:id', (req, res) => {
    const test = tests.find(c => c.id === parseInt(req.params.id));
    if (!test) return res.status(404).send('Not found.');

    test.name = req.body.name;
    res.send(test);
});

// delete
app.delete('/tests/:id', (req, res) => {
    const test = tests.find(c => c.id === parseInt(req.params.id));
    if (!test) return res.status(404).send('Not found.');

    const index = tests.indexOf(test);
    tests.splice(index, 1);

    res.send(test);
});

const api = functions.https.onRequest(app);
module.exports = { api };