const VaultEntry = require('../models/vaultEntry');

// Create
exports.createEntry = async (req, res) => {
  const { title, category, encryptedContent, autoDeleteDate, visibility } = req.body;
  try {
    const entry = await VaultEntry.create({
      userId: req.userId,
      title,
      category,
      encryptedContent,
      autoDeleteDate,
      visibility
    });
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create entry', error: err.message });
  }
};

// Read all for user
exports.getEntries = async (req, res) => {
  try {
    const entries = await VaultEntry.find({ userId: req.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch entries', error: err.message });
  }
};

// Update
exports.updateEntry = async (req, res) => {
  const { id } = req.params;
  const { title, category, encryptedContent, autoDeleteDate, visibility } = req.body;
  try {
    const entry = await VaultEntry.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { title, category, encryptedContent, autoDeleteDate, visibility, updatedAt: Date.now() },
      { new: true }
    );
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update entry', error: err.message });
  }
};

// Delete
exports.deleteEntry = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await VaultEntry.findOneAndDelete({ _id: id, userId: req.userId });
    if (!entry) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete entry', error: err.message });
  }
};