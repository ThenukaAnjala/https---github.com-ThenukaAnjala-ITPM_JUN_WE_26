const express = require('express');
const router = express.Router();
const { getTrips, getTrip , createTrip, updateTrip, deleteTrip} = require('../controllers/trip.controller.js');


//create trip
router.post("/create-trip",createTrip)

//get all trips
router.get('/get-trip', getTrips);

 //get a trip
router.get("/get-trip/:id",getTrip)

// update a trip
router.patch("/update-trip/:id", updateTrip)

// delete a trip
router.delete("/delete-trip/:id", deleteTrip)

module.exports  = router;