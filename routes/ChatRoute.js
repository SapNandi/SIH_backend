const express = require('express');
const router = express.Router();
const chatController  = require('../Controller/ChatController');

router.post("/", chatController.createChat);
router.get("/:userId", chatController.userChats);
router.get("/find/:firstId/:secondId", chatController.findChat);

module.exports = router;