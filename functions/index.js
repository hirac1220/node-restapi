const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// local http://localhost:5000/react-firebase-f3f4a/us-central1/api
// firebase https://us-central1-react-firebase-f3f4a.cloudfunctions.net/api

const app = express();
app.use(cors());
app.use(express.json());

const tsundokus = [
    { id: 1, title: 'マイクロサービスアーキテクチャ', location: 'サイドテーブル', memo: 'CICD勉強する' },
    { id: 2, title: 'オフショアプロジェクトマネジメント', location: '机', memo: '海外エンジニアメンタリング'  },
    { id: 3, title: 'チーム・ジャーニー', location: '本棚', memo: 'PM勉強'   },
];

app.get('/', (req, res) => {
    res.send('積ん読リスト rest api by node.js');
});

// get
app.get('/tsundokus', (req, res) => {
    res.send(tsundokus);
});

app.get('/tsundokus/:id', (req, res) => {
    const tsundoku = tsundokus.find(c => c.id === parseInt(req.params.id));
    if (!tsundoku) return res.status(404).send('Not found.');
    res.send(tsundoku);
});

// post
app.post('/tsundokus', (req, res) => {
    const tsundoku = {
        id: tsundokus.length + 1,
        title: req.body.title,
        location: req.body.location,
        memo: req.body.memo
    };
    tsundokus.push(tsundoku);
    res.send(tsundoku);
});

// put
app.put('/tsundokus/:id', (req, res) => {
    const tsundoku = tsundokus.find(c => c.id === parseInt(req.params.id));
    if (!tsundoku) return res.status(404).send('Not found.');

    tsundoku.memo  = req.body.memo;
    res.send(tsundoku);
});

// delete
app.delete('/tsundokus/:id', (req, res) => {
    const tsundoku = tsundokus.find(c => c.id === parseInt(req.params.id));
    if (!tsundoku) return res.status(404).send('Not found.');

    const index = tsundokus.indexOf(tsundoku);
    tsundokus.splice(index, 1);

    res.send(tsundoku);
});

const api = functions.https.onRequest(app);
module.exports = { api };