const mongoose = require('mongoose');

// Define the Slot schema
const slotSchema = new mongoose.Schema({
  vaccinationCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VaccinationCenter',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  availableSlots: {
    type: Number,
    required: true
  },
  // Add any additional fields as needed
});

// Create and export the Slot model
module.exports = mongoose.model('Slot', slotSchema);
