const express = require('express');
const path = require('path');
const Post = require('../model/post');
const upload = require('../uploads/multer');

const router = new express.Router();

router.post('/post/add', upload.single('file'), async (req, res) => {
  try {
    const data = {
      postImage: req.file.filename,
      author: req.body.userName,
      location: req.body.userAddress,
      description: req.body.userDesc,
      date: req.body.date,
    };

    const saveData = new Post({
      ...data,
    });

    const a = await saveData.save();
    res.json({
      status: 'Success',
      data: saveData,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error.message,
    });
  }
});

router.get('/post', async (req, res) => {
  try {
    let data = await Post.find();

    data.reverse();

    res.json({
      user: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: e.message,
    });
  }
});

router.get('/image/:id', (req, res) => {
  const photo = path.join(__dirname, '../uploads/images/', req.params.id);
  res.sendFile(photo);
});

module.exports = router;
