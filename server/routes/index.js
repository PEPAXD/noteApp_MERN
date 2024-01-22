const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App routes
 */

router.get('/', mainController.homePage);
router.get('/about', mainController.about);


module.exports = router;

