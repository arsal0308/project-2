var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/cars');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', carsCtrl.index);
router.get('/new', ensureLoggedIn, carsCtrl.new);
router.get('/:id', carsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, carsCtrl.edit);
router.post('/', ensureLoggedIn, carsCtrl.create);
router.delete('/:id', ensureLoggedIn, carsCtrl.delete);
router.put('/:id', ensureLoggedIn, carsCtrl.update);

module.exports = router;

