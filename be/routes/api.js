const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/posts', controller.getPosts);
router.post('/post', controller.postPost);

module.exports = router;