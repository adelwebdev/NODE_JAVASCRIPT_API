const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: True,
    },
    message: {
      type: String,
      required: True,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = { PostsModel };
