'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/list', userController.user_list_get);
router.get('/:id', userController.user_get);

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Log successful')
});

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
    res.delete(req.params);
    res.send('With this endpoint you can delete users.');
});

router.get('./models/userModel.js', (req, res) => {
    console.log('made it');
    res.send(req.params.filename);
});

module.exports = router;
