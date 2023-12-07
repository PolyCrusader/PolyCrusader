const Tinder = require('../models/Tinder');

exports.createThing = (req, res, next) => {
    const tinder = new Tinder({
        Categorie: req.body.Categorie,
        DescriptionCategorie: req.body.DescriptionCategorie,
        imageUrl: req.body.imageUrl,
        Description: req.body.Description
    });
    tinder.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
exports.getOneThing = (req, res, next) => {
    Tinder.findOne({
        _id: req.params.id
    }).then(
        (tinder) => {
            res.status(200).json(tinder);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};
exports.getAllTinder = (req, res, next) => {
    Tinder.find().then(
        (tinder) => {
            res.status(200).json(tinder);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};