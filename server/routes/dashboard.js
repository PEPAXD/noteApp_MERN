const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

/**
 * Dashboard routes
 */

router.get('/dashboard', dashboardController.dashboard);

module.exports = router;