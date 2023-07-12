const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/vaccination-centers', userController.getVaccinationCenters);
router.post('/apply-slot', userController.applySlot);
router.post('/logout', userController.logout);

module.exports = router;
