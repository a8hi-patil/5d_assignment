const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config("./config.env")
const app = express();
const connectDB = require('./config/dbConnection')
connectDB();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.use(require('./routes/userRoutes'))
app.use(express.static("./public"));
  

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})