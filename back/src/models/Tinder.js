const mongoose = require('mongoose');

const TinderSchema = mongoose.Schema({
    ImageId: { type: Number, required: true },
    Categorie: { type: String, required: true },
    DescriptionCategorie: { type: String, required: true },
    imageUrl: { type: String, required: true },
    Description: { type: String, required: true }
});

module.exports = mongoose.model('Tinder', TinderSchema);
