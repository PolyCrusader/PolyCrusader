const express = require('express');
const app=express();
const mongoose = require('mongoose');
const tinderRoutes = require('./src/routes/TinderRouter');
// Importer le module dotenv
require('dotenv').config();


app.use(express.json());
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/tinder', tinderRoutes);


module.exports=app;