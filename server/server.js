const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.get('/not-found', (req, res) => {
    res.status(404).send({
        error: 'Page not found'
    });
});

app.get('/about', (req, res) => {
    res.status(200)
        .send({
            title: 'About us',
            version: '1.0.5'
        });
});

app.get('/users', (req, res) => {
    res.send([{
        id: 1,
        name: 'Ozzy'
    }, {
        id: 2,
        name: 'Paul'
    }, {
        id: 6,
        name: 'Roger'
    }]);
});

app.listen(3000, () => {
    console.log('Server up and running');
});

module.exports.app = app;