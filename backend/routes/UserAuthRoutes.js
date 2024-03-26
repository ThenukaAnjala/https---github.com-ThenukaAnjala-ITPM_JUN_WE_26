const express = require('express')
const router = express.Router()
const authenticatecontroller =  require('../controllers/AuthenticateController');


router.post('/register', async (req, res) => {

   await authenticatecontroller.UserRegistration(req,res)  

})

router.post('/login', async (req, res) => {

    await authenticatecontroller.UserLogin(req,res)  
 
})



















module.exports  = router;