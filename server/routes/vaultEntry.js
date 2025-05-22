const express = require('express');
const router = express.Router();
const vaultController = require('../controllers/vaultEntery');
const auth = require('../middleware/auth');

router.post('/', auth, vaultController.createEntry);
router.get('/', auth, vaultController.getEntries);
router.put('/:id', auth, vaultController.updateEntry);
router.delete('/:id', auth, vaultController.deleteEntry);

module.exports = router;