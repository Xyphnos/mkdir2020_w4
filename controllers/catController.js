'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) =>{
        console.log('cat id parameter', req.params.id);
        const cat = cats.filter(cat => cat.id === req.params.id).pop();
            // use .find instead of .filter to leave pop() out
        res.json(cat);
    //get cat by id
};

const cat_post = (req, res) => {
    console.log('cat_post', req.body);
    res.send('With this endpoint you can add cats');
};


module.exports = {
    cat_list_get,
    cat_get,
    cat_post,
};