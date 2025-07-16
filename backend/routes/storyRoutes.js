const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyController');

router.post('/', controller.createStory);
router.get('/', controller.getStories);
router.post('/:id/like', controller.likeStory);

module.exports = router;