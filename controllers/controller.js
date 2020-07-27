const post = require('../models/post')
const user = require('../models/user')

// get all the users, sorted by name
exports.getUsers = (req, res) => {
    const filter = {}
    const fields = ['name']
    const options = {
        sort: {name: 1}
    }
    res.setHeader('Content-Type', 'application/json')
    user.find(filter, fields, options, (err, users) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(users)
    })
}

// authenticate an existing user, or create a new one
exports.postUser = (req, res) => {
    let filter = {
        name: req.body.user,
        password: req.body.password
    }
    res.setHeader('Content-Type', 'application/json')
    user.findOne(filter, (err, oneUser) => {
        if (err) return res.status(500).send(err)
        if (oneUser) return res.status(200).json(oneUser)
        // if not found, either the password is wrong, or the user does not exist
        filter = {
            name: req.body.user
        }
        user.findOne(filter, (err, oneUser) => {
            if (err) return res.status(500).send(err)
            // if the user is there, it means that the password was wrong
            if (oneUser) return res.status(401).json(oneUser)
            // if the user does not exist, create it
            const newUserObj = new user({
                name: req.body.user,
                password: req.body.password
            })
            newUserObj.save(err => {
                if (err) return res.status(500).send(err)
                return res.status(201).json(newUserObj)
            })
        })
    })
}

exports.getPosts = (req, res) => {
    const filter = {}
    const fields = ['user', 'post', 'date']
    const options = {
        limit: 20,
        sort: {date: -1}
    }
    res.setHeader('Content-Type', 'application/json')
    post.find(filter, fields, options, (err, posts) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(posts)
    })
}

exports.postPost = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const newPostObj = new post({
        user: req.body.user,
        post: req.body.post.substring(0, 100),
        date: new Date
    })
    newPostObj.save(err => {
        if (err) return res.status(500).send(err)
        return res.status(201).json(newPostObj)
    })

}