const moment = require('moment-timezone');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

function nameLogFile(){
    return moment().tz("America/Lima").format("YYYYMMDD");
}

function customMorgan(){
    let accessLogStream = rfs.createStream(nameLogFile() + '.log', {
        interval: '1d', // rotate daily
        path: path.join('./src/', 'log')
    })
    
    let logger = morgan("combined", { stream: accessLogStream });
    return logger;
}

module.exports = {
    nameLogFile, customMorgan
}