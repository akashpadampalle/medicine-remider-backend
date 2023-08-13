const express = require('express');
const passport = require('passport');
const medicineController = require('../controllers/medicineController');
const router = express.Router();

router.post('/create', passport.authenticate('jwt', {session: false}), medicineController.create);

module.exports = router;