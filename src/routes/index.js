const router = require('express').Router();

const monitorRoute = require('./monitor.route');
router.use('/monitor', monitorRoute);

module.exports = router;