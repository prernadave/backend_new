const { UserModel } = require("../models/user.model"); //user model 
const express = require('express')

const userRouter = express.Router() //User Router


// ------------------------------------------------Signup router--------------------------------------------------------------------------------

userRouter.post('/register', async (req, res) => {

    const { name, email, password } = req.body;
    let findEmail = await UserModel.findOne({ email })
    if (findEmail) {
        res.send({ message: "You are already registered" })
    } else {
        try {
            let newUser = await UserModel({ name, email, password })
            await newUser.save()
            res.status(201).send('User Registered Successfully')
            console.log(newUser);
        } catch (error) {
            res.send(error)
        }
    }



})


// -------------------------------------------------Login Router-----------------------------------------


userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let existinguser = await UserModel.findOne({ email: email })
    if (!existinguser) {
        res.send('user not found')
    } else
        try {
            if (existinguser.password == password) {
                res.send('login successfully')
            } else {
                res.send('Wrong Credentials!! please try again ')
            }
        } catch (error) {
            res.send(error)
        }

})

// ------------------------------------------Exporting User Router---------------------------------------------------
module.exports = { userRouter }
