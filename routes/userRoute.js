'use strict';
// userRoute
const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
passport.authenticate('jwt', {session: false});

router.get('/list', userController.user_list_get);
router.get('/:id', userController.user_get);

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', (req, res, next) => {
    res.send(req.user);
});

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
