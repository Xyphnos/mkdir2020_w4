'use strict';
// userController
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
    res.json(users);
};

const user_get = (req, res) =>{
    console.log('user id parameter', req.params.id);
    const user = users.filter(user => user.id === req.params.id).pop();
    delete user.password;
    // use .find instead of .filter to leave pop() out
    res.json(user);
    //get cat by id
};

const user_post = (req, res) => {
    console.log('data from form', req.body);
    res.send('With this endpoint you can add users');
};


module.exports = {
    user_list_get,
    user_get,
    user_post,
};