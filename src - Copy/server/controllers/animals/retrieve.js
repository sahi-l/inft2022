import Animal from '../../models/Animal.js';

export default async (req, res, next)=>{
    
    const query = {};
    
    if (req.params.name) {
        query.name = rq.params.name; 
    }

    const animals = await Animal.find(query);

    if (query.name){
        res.json(animals.pop());
    } else{
        res.json(animals);
    };
}