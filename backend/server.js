require("dotenv").config(); //require and directly invoke the config method
const express = require("express");
const StartTrip = require("./models/start_trip_info_model.js");
const mongose = require("mongoose");
const StartTripRoutes = require("./routes/StartTrip_routes.js")


const UserAuthRoutes = require('./routes/UserAuthRoutes')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})
//routes
//app.use('/api/guardian',exampleRoute)

app.use('/api/StartTrips',StartTripRoutes)

//connect to db
mongose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connect to the db & listening on port ", process.env.PORT);
    });
  })
  .catch(() => {
    console.log("error");
  });
