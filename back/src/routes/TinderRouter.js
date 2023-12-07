const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/TinderController');

router.get('/',stuffCtrl.getAllTinder);
router.get('/:ImageId',stuffCtrl.getOneThing);
router.post('/',stuffCtrl.createThing);
router.delete('/:id',stuffCtrl.deleteTinder);
module.exports=router;