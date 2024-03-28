const express = require('express');
const router = express.Router();
const { createUser, loginUser,updateUser, deleteUser } = require('../controllers/AuthenticateController');


router.post('/register', createUser);

router.post('/login',loginUser);

router.patch('/:updateID',updateUser);

router.delete('/:deleteID',deleteUser);


// Export the router
module.exports = router