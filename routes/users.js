const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/userController');

router.post('/create', userController.create);

router.post('/login', passport.authenticate('local', {session: false /* not using session */}), userController.createSession)


module.exports = router;

