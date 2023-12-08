const express = require('express');
const router = express.Router();
const tierListCtrl = require('../controllers/TierListController');

router.get('/',tierListCtrl.getAllTierList);
router.post('/',tierListCtrl.createTierList);
router.delete('/:id',tierListCtrl.deleteTierList);
module.exports=router;