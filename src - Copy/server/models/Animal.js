import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//const objectId = Schema.ObjectId;

const animalschema = new Schema({
name: String, Legs: Integer, heads: Integer, sound: String
});

export default mongoose. model('Animal', aninalSchema)