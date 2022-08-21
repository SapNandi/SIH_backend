const express = require('express');
const messageController = require('../Controller/MessageController');

const router = express.Router();

router.post('/', messageController.addMessage);
router.get('/:chatId', messageController.getMessage);

module.exports = router;