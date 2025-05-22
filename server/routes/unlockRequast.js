const express = require('express');
const router = express.Router();
const unlockController = require('../controllers/unLockRequast');

router.post('/request', unlockController.requestUnlock);

module.exports = router;