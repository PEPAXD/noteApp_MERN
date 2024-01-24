const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');

/**
 * Dashboard routes
 */

//TODO: Add isLoggedIn middleware FIX ERROR

router.get('/dashboard', dashboardController.dashboard);

module.exports = router;