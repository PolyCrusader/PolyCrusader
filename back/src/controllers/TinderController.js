const Tinder = require('../models/Tinder');
const mongoose = require('mongoose');

const { body, validationResult } = require('express-validator');

exports.createThing = [
    // Validation des données d'entrée
    body('ImageId').isNumeric(),
    body('Categorie').isString().notEmpty(),
    body('DescriptionCategorie').isString().notEmpty(),
    body('imageUrl').isString().notEmpty(),
    body('Description').isString().notEmpty(),

    // Middleware de validation
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    // Fonction de création de l'objet Thing
    (req, res, next) => {
        const tinder = new Tinder({
            ImageId: req.body.ImageId,
            Categorie: req.body.Categorie,
            DescriptionCategorie: req.body.DescriptionCategorie,
            imageUrl: req.body.imageUrl,
            Description: req.body.Description
        });

        tinder.save()
            .then(() => {
                res.status(201).json({
                    message: 'Post saved successfully!'
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            });
    }
];

exports.getOneThing = (req, res, next) => {
    Tinder.findOne({
        ImageId: req.params.ImageId
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
exports.deleteTinder = (req, res, next) => {
    Tinder.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
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