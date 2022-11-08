
const dotenv = require('dotenv');
const path = require('path');
const {logger} = require('../util/logger');
let config = {};

function buildConfiguration() {

    logger.info(process.env.NODE_ENV);
    if (process.env.NODE_ENV){
        logger.info('Entorno::Desarrollo');
        dotenv.config({        
            path: path.resolve('./src/env/', 'dev.env')
        });
    }    

    config.mysql = {
        host: process.env.MYSQLHOST,
        username: process.env.MYSQLUSER,
        password: process.env.MYSQLPASS,
        port: process.env.MYSQLPORT,
        database: process.env.MYSQLDATABASE
    }

    logger.info('Configuracion cargada exitosamente');
    return config;
}

module.exports = {
    buildConfiguration
}