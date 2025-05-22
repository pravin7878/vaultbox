const mongoose = require('mongoose');

const unlockRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contactEmail: { type: String, required: true },
  requestedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'denied', 'expired'], default: 'pending' }
});

module.exports = mongoose.model('UnlockRequest', unlockRequestSchema);