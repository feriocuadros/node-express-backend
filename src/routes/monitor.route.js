const express = require('express');
const monitorService = require('../services/monitor.services');
const router = express.Router();
const {logger} = require('../util/logger');

router.get('/testnodeserver', async function (req, res, next) {
    const response = await monitorService.getTestingConnection();
    return res.status(200).send(response);
});

module.exports = router;