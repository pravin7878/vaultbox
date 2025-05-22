const mongoose = require('mongoose');

const vaultEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  encryptedContent: { type: String, required: true },
  autoDeleteDate: { type: Date, default: null },
  visibility: { type: String, enum: ['private', 'shared', 'unlock_after'], default: 'private' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VaultEntry', vaultEntrySchema);