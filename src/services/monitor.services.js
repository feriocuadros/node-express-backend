const monitorRepo = require('../repository/monitor.respository');

async function getTestingConnection(){
    const response = monitorRepo.getTestingConnection();
    return response;
} 

module.exports = {
    getTestingConnection
}