const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin routes
router.post('/login', adminController.login);
router.post('/add-vaccination-center', adminController.addVaccinationCenter);
router.get('/dosage-details', adminController.getDosageDetails);
router.delete('/remove-vaccination-center/:id', adminController.removeVaccinationCenter);

module.exports = router;
