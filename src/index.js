const express = require('express')
require('./db/mongoose')   // Mongoose.js runs and connects to database.
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const jwt = require('jsonwebtoken')

const app = express ()
const port = process.env.PORT


app.use(express.json()) // Automatically parse incoming json to an object to be accessible.
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up.', port)
})





