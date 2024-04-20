const Animal = require('../models/Animal');

//retrieving animals from the database.
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.render('all-animals', { animals });
    } catch (err) {
        console.error('Error fetching animals:', err);
        res.status(500).send('Internal Server Error');
    }
};

// Retrieve animal using any id 
exports.getAnimalById = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        res.render('animal-details', { animal });
    } catch (err) {
        console.error('Error fetching animal:', err);
        res.status(500).send('Internal Server Error');
    }
};

//Add a new animal
//check if it exists first
exports.createAnimal = async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.redirect('/animals');
    } catch (err) {
        console.error('Error creating animal:', err);
        res.status(500).send('Internal Server Error');
    }
};

// Retrieve and updte the animal in the database
exports.updateAnimalById = async (req, res) => {
    try {
        await Animal.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/animals/${req.params.id}`);
    } catch (err) {
        console.error('Error updating animal:', err);
        res.status(500).send('Internal Server Error');
    }
};

// Retrieve and delete the animal from the database
exports.deleteAnimalById = async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.redirect('/animals');
    } catch (err) {
        console.error('Error deleting animal:', err);
        res.status(500).send('Internal Server Error');
    }
};
