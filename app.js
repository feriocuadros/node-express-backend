const express = require('express');
const morgan = require('morgan');
const {logger} = require('./src/util/logger');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accepted-Encoding');
    next();
});

app.use(morgan('combined'));
app.use('/', require('./src/routes'));
    
require('./src/config/monitor.config').buildConfiguration();
logger.info('Servidor iniciado exitosamente');

module.exports = app;