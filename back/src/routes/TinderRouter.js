const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/TinderController');

router.get('/',stuffCtrl.getAllTinder);
router.get('/:id',stuffCtrl.getOneThing);
router.post('/',stuffCtrl.createThing);
module.exports=router;