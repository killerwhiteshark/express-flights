var express = require('express');
var router = express.Router();
const airCtrl = require('../controllers/airline-c')

router.get('/', airCtrl.index);
router.get('/new', airCtrl.new)
router.post('/', airCtrl.create);

module.exports = router;