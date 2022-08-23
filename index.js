const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors({ origin: ["http://localhost:3000"], credentials: true}))
app.use(cors({ origin: ["https://gatekeep.netlify.app/"], credentials: true}))

app.options('*', cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vmuwpnk.mongodb.net/gkinfo`)


app.use(express.json());

app.use('/user', require('./routes/userRouter'))

app.listen(process.env.PORT, () => {
    console.log(`The server is running on ${process.env.PORT}`)
})