const express = require('express')
const router = express.Router()
const {
    createAtt,
    markAtt,
    deleteAtt,
    getAtt,
    getaAtt,
} = require('../controller/Examplecontroller')

router.post('/',createAtt)

//get an att
router.get('/:id',getaAtt)

//get all att
router.get('/',getAtt)

//mark att
router.patch('/:id',markAtt)

//dlt att
router.delete('/:id',deleteAtt)

module.exports  = router