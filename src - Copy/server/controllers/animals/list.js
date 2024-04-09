
import Animal from '../../models/Animal.js'

export default async (req, res, next) => {

    const query = {};
    const animals = await Animal.find(query);


    res.render('animals/list', {
        animals: animals
    });
};