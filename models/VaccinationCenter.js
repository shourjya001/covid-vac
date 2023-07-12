const mongoose = require('mongoose');

// Define the VaccinationCenter schema
const vaccinationCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  slots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot'
  }],
  // Add any additional fields as needed
});

// Create and export the VaccinationCenter model
module.exports = mongoose.model('VaccinationCenter', vaccinationCenterSchema);
