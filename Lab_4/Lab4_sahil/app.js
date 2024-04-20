
// Name : Sahil Tankaria
// Student ID : 100867174
// Date: April 18,2024
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const animalRoutes = require('./models/animals');
dotenv.config();
const app = express();

//the routes

app.use('/animals', animalRoutes);



//mongo connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

//starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
