// Name : Sahil Tankaria
// Student ID : 100867174
// Date: April 18,2024
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
// show index 
    res.render('index', { pageTitle: 'Home' });
});

module.exports = router;
