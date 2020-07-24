const post = require('../models/post');

exports.getPosts = (req, res) => {
    const filter = {};
    const fields = ['user', 'post', 'date'];
    const options = {
        limit: 20,
        sort: {date: -1}
    };
    res.setHeader('Content-Type', 'application/json');
    post.find(filter, fields, options, (err, posts) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(posts);
    });
};

exports.postPost = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const newPostObj = new post({
        user: req.body.user,
        post: req.body.post,
        date: new Date
    });
    newPostObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(newPostObj);
    });

}