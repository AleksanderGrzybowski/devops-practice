const express = require('express');
const app = express();

const getIP = require('external-ip')();
const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({filename: 'app.log'})
    ]
});

app.get('/', (req, res) => {
    logger.info(`New connection from ${req.connection.remoteAddress}`);
    
    getIP((err, ip) => {
        if (err) throw err;
        
        const message = `Hello! I'm at ${ip}`;
        logger.info(`Sending response: "${message}"`);
        res.send(message);
    });
});

app.listen(3000, () => logger.info('App up.'));
