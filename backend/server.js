const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const storyRoutes = require('./routes/storyRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/stories', storyRoutes);

mongoose.connect('mongodb://localhost:27017/emojiDB')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
