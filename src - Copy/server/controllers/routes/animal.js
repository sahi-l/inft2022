import AnimalsListView from '../controllers/animals/list.js';
import AnimalsShowView from '../controllers/animals/show.js';
import AnimalsCreateView from '../controllers/animals/create.js';
import AnimalsEditView from '../controllers/animals/edit.js';

import AnimalsFindController from '../controllers/animals/retrieve.js';

export const animalsRouter = express.Router();







animalsRouter.get('/animals', AnimalsListView);


animalsRouter.get('/animals/create', AnimalsCreateView);


animalsRouter.get('/animals', AnimalsListView);


animalsRouter.get('/api/animals/:name', AnimalsShowView);


animalsRouter.get('/api/animals/:name/edit', AnimalsEditView);


animalsRouter.get('/api/animals/:name', AnimalsFindController);