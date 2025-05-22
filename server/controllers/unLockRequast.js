const User = require('../models/user');
const UnlockRequest = require('../models/unlockRequest');

exports.requestUnlock = async (req, res) => {
  const { email } = req.body; // trusted contact's email
  try {
    // Find user with this trusted contact
    const user = await User.findOne({ trustedContact: email });
    if (!user) return res.status(404).json({ message: 'No vault found for this contact' });

    // Create unlock request
    const unlockRequest = await UnlockRequest.create({
      userId: user._id,
      contactEmail: email
    });

    res.json({ message: 'Unlock request submitted', unlockRequest });
  } catch (err) {
    res.status(500).json({ message: 'Failed to request unlock', error: err.message });
  }
};