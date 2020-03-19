'use strict';
// catRoute
const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
const catController = require('../controllers/catController.js');

router.get('/list', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/uploads', upload.single('file_name'), (req, res) => {
    console.log('wat');
    res.send('upload successful');
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

router.get('./models/catModel.js', (req, res) => {
    console.log('made it');
    res.send(req.params.filename);
});

module.exports = router;
