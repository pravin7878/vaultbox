const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  trustedContact: { type: String, default: null }, // email of trusted contact
  lastActive: { type: Date, default: Date.now }
});


module.exports = mongoose.models.User || mongoose.model('User', userSchema);