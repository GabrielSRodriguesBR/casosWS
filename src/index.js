const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes'); 


const app = express();

const stringConnection = "mongodb+srv://admin:urubu@cluster0.imohc.gcp.mongodb.net/WSDatabase?retryWrites=true&w=majority";
mongoose.connect(stringConnection,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(express.json());
app.use(routes);


app.listen(2077);