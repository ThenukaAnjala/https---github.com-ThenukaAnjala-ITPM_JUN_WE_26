const express = require('express');
const router = express.Router();
const { createUser, loginUser,updateUser, deleteUser,getUser,getAllUsers } = require('../controllers/AuthenticateController');


router.post('/register', createUser);

router.post('/login',loginUser);

router.patch('/:updateID',updateUser);

router.delete('/:deleteID',deleteUser);

router.get('/:id',getUser);

router.get('/getAll',getAllUsers);


// Export the router
module.exports = router