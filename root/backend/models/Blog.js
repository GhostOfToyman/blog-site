const mongoose = require('mongoose');

const blogSchema = new Schema({
    title: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        upVotes: Number,
        downVotes: Number
    }]
});

const Blog = model('Blog', blogSchema);
export default Blog
