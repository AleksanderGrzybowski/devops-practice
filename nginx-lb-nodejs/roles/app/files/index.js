const express = require('express');
const app = express();

const getIP = require('external-ip')();

app.get('/', (req, res) => {
    getIP((err, ip) => {
        if (err) throw err;
        res.send(`Hello! I'm at ${ip}`);
    });
});

app.listen(3000, () => console.log('App up.'));
