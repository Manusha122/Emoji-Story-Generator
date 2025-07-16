const Story = require('../models/Story');
const { translateEmojis } = require('../translation');

exports.createStory = async (req, res) => {
  try {
    const { emojiSequence, authorNickname } = req.body;
    const translation = translateEmojis(emojiSequence);

    const story = new Story({ emojiSequence, translation, authorNickname });
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStories = async (req, res) => {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
};

exports.likeStory = async (req, res) => {
    const { id } = req.params;
    const story = await Story.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
    res.json(story);
};