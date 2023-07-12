const User = require('../models/User');
const VaccinationCenter = require('../models/VaccinationCenter');

// User controller functions
exports.signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Implement validation and create user logic here
    // Example:
    const user = await User.create({ fullName, email, password });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Implement validation and login logic here
    // Example:
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getVaccinationCenters = async (req, res) => {
  try {
    // Fetch vaccination centers from the database
    // Implement logic to get vaccination centers
    // Example:
    const vaccinationCenters = await VaccinationCenter.find();
    res.json({ vaccinationCenters });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.applySlot = async (req, res) => {
    try {
      const { centerName, slotDate } = req.body;
  
      // Implement validation and apply slot logic here
      // Example:
      const user = req.user; // Get the user from the authenticated request
      const vaccinationCenter = await VaccinationCenter.findOne({ name: centerName });
      if (vaccinationCenter) {
        // Check availability and apply slot logic
        const existingSlots = await Slot.find({ vaccinationCenter: vaccinationCenter._id, date: slotDate });
        if (existingSlots.length >= 10) {
          res.status(400).json({ error: 'No available slots for this date' });
        } else {
          const newSlot = await Slot.create({ user: user._id, vaccinationCenter: vaccinationCenter._id, date: slotDate });
          res.json({ message: 'Slot applied successfully', slot: newSlot });
        }
      } else {
        res.status(404).json({ error: 'Vaccination center not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

exports.logout = (req, res) => {
  // Implement logout logic
  // Example: Destroy the user session or token
  res.json({ message: 'Logout successful' });
};
