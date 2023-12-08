const TierList = require('../models/TierList');
const mongoose = require('mongoose');

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