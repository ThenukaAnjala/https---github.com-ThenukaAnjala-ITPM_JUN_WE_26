const StartTrip = require('../models/start_trip_info_model') // product model 


const getTrips = async (req, res) => {

    try {
        const StartTrips = await StartTrip.find();
        res.status(200).json(StartTrips);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
}

const getTrip = async (req, res) => {
    const id = req.params.id
    try {
        const response = await StartTrip.findById(id);
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createTrip = async (req , res) => {
    const {Destination,StartDateandTime,ModeOfTransportation,NumberOfTravelers, ExpectedDurationOfTravel} = req.body;
    try {
        const StartTrips = await StartTrip.create({
            Destination : Destination,
            StartDateandTime : StartDateandTime,
            ModeOfTransportation: ModeOfTransportation,
            ExpectedDurationOfTravel: ExpectedDurationOfTravel,
            NumberOfTravelers : NumberOfTravelers,
            
        });
             
        res.status(200).json(StartTrips);
      } catch (error) {
        console.log("Error creating StartTrip:", error);
        res.status(500).json({ message: error.message });
      }
}

const updateTrip = async (req, res) => {
    try {
        const { id } = req.params;
    
        const StartTrips = await StartTrip.findByIdAndUpdate(id, req.body);
    
        if (!StartTrips) {
          return res.status(404).json({ message: "Not found" });
        }
    
        const upadatedTrip = await StartTrip.findById(id);
        res.status(200).json(upadatedTrip);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;
    
        const StartTrips = await StartTrip.findByIdAndDelete(id);
    
        if (!StartTrips) {
          return res.status(404).json({ message: "Not Found" });
        }
    
        res.status(200).json({ message: "Successfully Deleted" });
      } catch (error) {}
}

module.exports = {
    getTrips,
    getTrip,
    createTrip,
    updateTrip, 
    deleteTrip

};