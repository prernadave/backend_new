const express = require('express')
const { connection } = require('./config/db') //connection to db
const { userRouter } = require('./routes/user.route')  //user router
const { flightRouter } = require('./routes/flight.route') //flightrouter
const app = express()

app.use(express.json()) //middleware

// home page 
app.get('/', (req, res)=>{
    res.send('Welcome to Air Ticket Booking App')
})

// routes
app.use('/api' ,userRouter)
app.use('/api', flightRouter)




// server
app.listen(5000,  async()=>{
 try {
    await connection
    console.log('connected to db');
    console.log('server running at 5000');
 } catch (error) {
    console.log('cant connect ');
    console.log(error);
 }
})