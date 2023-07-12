const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },	
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
