const express = require('express')
const { FlightModel } = require('../models/flight.model')  //flight model
const flightRouter = express.Router() //flight router


// ------------------------------------------------------GET ALL THE FLIGHTS------------------------------------------------------------------------

flightRouter.get('/flights', async (req, res) => {
    try {
        const data = await FlightModel.find();
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
        console.log("can't find");
    }
})

// ---------------------------------------------------GET SINGLE FLIGHT BY ID----------------------------------------------------------------------------------------------------------------------
flightRouter.get('/flights/:id', async (req, res) => {
    try {
        const data = await FlightModel.findById(req.params.id);
        if (!data) {
            return res.status(404).send('Flight not found')
        }
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
        console.log("can't find");
    }
})

// --------------------------------------------ADD NEW FLIGHT---------------------------

flightRouter.post('/flights', async (req, res) => {

    try {
        const data = new FlightModel(req.body)
        const newFlight = await data.save()
        res.send(newFlight)
        console.log(newFlight);
    } catch (error) {
        res.send(error)
        console.log("can't add flight");
    }
})


// /---------------------------------------------------UPDATE EXISTING FLIGHT-----------------------------------------------------------------------------------
flightRouter.put('/flights/:id', async (req, res) => {
    const para = req.params.id
    const body = req.body
    try {

        const data = await FlightModel.findByIdAndUpdate(para, body);
        if (!data) {
            return res.status(404).send('Flight not found')
        }
        res.send(data)
        console.log(data);
    } catch (error) {
        res.send(error)
        console.log("can't find");
    }
})


// ----------------------------------------------------DELETING EXISTING FLIGHT---------------------------------------------------------------------------------------------------------------------------------------
flightRouter.delete('/flights/:id', async (req, res) => {
    const para = req.params.id

    try {

        const data = await FlightModel.findByIdAndDelete(para);
        if (!data) {
            return res.status(404).send('Flight not found')
        }
        res.status(202).send(data)
    } catch (error) {
        res.send(error)
        console.log("can't find");
    }
})





// ------------------------------------------------EXPORTING FLIGHT ROUTER---------------------------------------------------------------------

module.exports = { flightRouter }


// {
//     "airline": "AirWay India",
//     "flightNo": "644500",
//     "departure": "21:50 pm",
//     "arrival": "23:50 pm",
//     "departureTime": "2023-04-01",
//     "arrivalTime": "2023-04-01",
//     "seats": 90,
//     "price": 40000
//   }


