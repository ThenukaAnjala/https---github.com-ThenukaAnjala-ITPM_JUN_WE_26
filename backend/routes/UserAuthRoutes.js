const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/AuthenticateController');

// Define route for handling POST requests to '/'
router.post('/register', createUser);

router.post('/login')

// Export the router
module.exports = router