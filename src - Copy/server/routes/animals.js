import express from 'express';

import AnimalsListView from '../controllers/animals/list.js';
import  AnimalsShowView from '../controllers/animals/show.js';
import AnimalsCreateView from '../controllers/animals/create.js';
import AnimalsEditView from '../controllers/animals/edit.js';

import FindAnimalsController from '../controllers/animals/retrieve.js'

export const animalsrouter =  express.Router();



// render.get('/animals', async (req, res, next)=>{
//     const query={};
//     const animals = await Animal.find(query);
//     const param = {
//         animals
//     }
//     return res.render(import.meta.dirname + '/views/animals/retrieve-all.ejs', param);
// });

animalsrouter.get('/animals', AnimalsListView);
animalsrouter.get('/animals/create', AnimalsCreateView);
animalsrouter.get('/animals/:name', AnimalsShowView);
animalsrouter.get('/animals/:name/edit', AnimalsEditView);




animalsrouter.get('/api/animals', FindAnimalsController);
animalsrouter.get('/api/animals/:name', FindAnimalsController);
// router.get('/animals/:name', FindAnimalController);

