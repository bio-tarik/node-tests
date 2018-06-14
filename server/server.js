const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.get('/not-found', (req, res) => {
    res.status(404).send({error: 'Page not found'});
});

app.listen(3000, () => {
    console.log('Server up and running');
});

module.exports.app = app;