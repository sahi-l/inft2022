Name : Sahil Tankaria
// Student ID : 100867174
// Date: April 18,2024

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const animalController = require('../controllers/animalcontroller');

// Define Animal schema
const animalSchema = new mongoose.Schema({
    zoo: { type: String, required: true },
    scientificName: { type: String, required: true },
    commonName: { type: String, required: true },
    givenName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    age: { type: Number, required: true },
    isTransportable: { type: Boolean, required: true }
});

const Animal = mongoose.model('Animal', animalSchema);

// GET route to fetch all animals
router.get('/', animalController.getAllAnimals);

// GET route to fetch a specific animal by ID
router.get('/:id', animalController.getAnimalById);

// POST route to create a new animal
router.post('/', animalController.createAnimal);

// POST route to update an existing animal by ID
router.post('/:id/update', animalController.updateAnimalById);

// POST route to delete an animal by ID
router.post('/:id/delete', animalController.deleteAnimalById);

module.exports = Animal;
module.exports = router;







