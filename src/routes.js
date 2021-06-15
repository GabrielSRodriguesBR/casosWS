const express = require('express');


const HomeController = require('./Controllers/HomeController');

const routes = express.Router();

routes.get('/home', HomeController.index);



module.exports = routes; 