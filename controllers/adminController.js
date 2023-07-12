const Admin = require('../models/Admin');
const VaccinationCenter = require('../models/VaccinationCenter');

// Admin controller functions
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Implement validation and login logic here
    // Example:
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      res.json({ message: 'Admin login successful', admin });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addVaccinationCenter = async (req, res) => {
  try {
    const { name, location, workingHours } = req.body;

    // Implement validation and add vaccination center logic here
    // Example:
    const vaccinationCenter = await VaccinationCenter.create({ name, location, workingHours });
    res.status(201).json({ message: 'Vaccination center added successfully', vaccinationCenter });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDosageDetails = async (req, res) => {
  try {
    // Get dosage details grouped by vaccination centers
    // Implement logic to fetch dosage details
    // Example:
    const dosageDetails = await Dosage.aggregate([
      { $group: { _id: '$vaccinationCenter', totalDosage: { $sum: '$dosage' } } }
    ]);
    res.json({ dosageDetails });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.removeVaccinationCenter = async (req, res) => {
  try {
    const centerId = req.params.id;

    // Implement logic to remove vaccination center
    // Example:
    const vaccinationCenter = await VaccinationCenter.findById(centerId);
    if (vaccinationCenter) {
      await vaccinationCenter.remove();
      res.json({ message: 'Vaccination center removed successfully' });
    } else {
      res.status(404).json({ error: 'Vaccination center not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
