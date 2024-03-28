const mongoose = require('mongoose');

const StartTripDetails = new mongoose.Schema(
    {
        Destination: {
            type: String,
            required: [true, "Please enter your expected destination"]

        },

        StartDateandTime: {
            type: Date,
            required: true
        
        },

        ModeOfTransportation: {
            type: String,
            required: true

        },

        NumberOfTravelers: {
            type: Number,
            required: [true, "Please enter the number of travelers"],
            default: 1

        },
    
    },

    {
        timestamps: true, // Enable automatic timestamps
    },

);

const StartTrip = mongoose.model("StartTrip", StartTripDetails);

module.exports = StartTrip;