const mysqlConn = require('../connection/mysql.connection').connection;
const {logger} = require('../util/logger');

function getTestingConnection(){
    return new Promise(async function (resolve, reject) {
        mysqlConn.query("select 'Testing success' as message", function (error, results, fields) {
            if (error) {
                logger.error(error);
                reject(error);
            }
            resolve(results[0]);
        });
    });
}

module.exports = { getTestingConnection }