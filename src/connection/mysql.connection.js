var mysql = require('mysql2');
const config = require('../config/monitor.config').buildConfiguration();
const {logger} = require('../util/logger');

var connection = mysql.createConnection({
    host     : config.mysql.host,
    user     : config.mysql.username,
    password : config.mysql.password,
    database : config.mysql.database,
    port     : config.mysql.port
});

connection.connect(function(err) {
    if (err) {
     logger.error(err);
     throw err;
    }
    logger.info(`Conexion exitosa a Base de Datos:: ${config.mysql.database}`);
});

module.exports = { connection };