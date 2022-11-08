
const dotenv = require('dotenv');
const path = require('path');
const {logger} = require('../util/logger');
let config = {};

function buildConfiguration() {

    if (process.env.NODE_ENV != 'production'){
        logger.info('Entorno::Desarrollo');
        dotenv.config({        
            path: path.resolve('./src/env/', 'dev.env')
        });
    }

    config.mysql = {
        host: process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE
    }

    logger.info('Configuracion cargada exitosamente');
    return config;
}

module.exports = {
    buildConfiguration
}