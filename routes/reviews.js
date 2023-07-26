const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post("/cars/:id/reviews", ensureLoggedIn, reviewsCtrl.create)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
// router.get('reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
// router.put('reviews/:id', ensureLoggedIn, reviewsCtrl.updateOne);

module.exports = router;