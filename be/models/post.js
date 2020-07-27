const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    user: {type: String},                   // this is the user that published the post
    post: {type: String, maxlength: 100},   // this is the post
    date: {type: Date}                      // the publish date (and time)
});

module.exports = mongoose.model('post', postSchema);