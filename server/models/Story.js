const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedStories` array in User.js
const storySchema = new Schema({

  description: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
    storyLog: {
        type: String,
        required: true,
    },
  title: {
    type: String,
    required: true,
  },
});

module.exports = storySchema;
