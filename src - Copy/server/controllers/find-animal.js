import Animal from '.-/models/Animal.js';

export default async (req, res, next) => {
mongoose. connect ('mongodb://127.0.0.1:27017/inft2202')
then (() => console. log('ConnectedI'));

const query = {};

if (req-params-name) {
query. name = Feq-params.name
}
const animals = await Animal.find(query);

res.render ('animals', {
animals

})
}