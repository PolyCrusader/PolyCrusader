const TierList = require('../models/TierList');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

exports.createTierList = [
    // Validation des données d'entrée
    body('Name').isString().notEmpty(),
    body('Description').isString().notEmpty(),
    body('Actions').isArray().notEmpty(),

    // Middleware de validation
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },

    // Fonction de création de la tier list
    (req, res, next) => {
        const tierList = new TierList({
            Name: req.body.Name,
            Description: req.body.Description,
            Actions: req.body.Actions
        });

        tierList.save()
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

exports.createTierList = (req, res, next) => {
    const tierList = new TierList({
        Name: req.body.Name,
        Description: req.body.Description,
        Actions: req.body.Actions
    });
    tierList.save().then(
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

exports.getAllTierList = (req, res, next) => {
    TierList.find().then(
        (tierlist) => {
            res.status(200).json(tierlist);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
exports.deleteTierList = (req, res, next) => {
    TierList.deleteOne({_id: req.params.id}).then(
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