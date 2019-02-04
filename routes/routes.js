const express = require('express');
const Router = express.Router();

Router.get('/', (req, res)=>{
    res.render('index', { title: "INICIO" });
});

Router.get('/contact', (req, res)=>{
    res.render('contact', { title: "CONTACTO" });
});

module.exports = Router;
