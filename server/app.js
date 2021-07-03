const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const db = require("./config/db")
const routes = require('./router')
const PORT = process.env.PORT || 4000

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors        
app.use(cors());


app.use('/v1', routes);

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})


module.exports = app;
