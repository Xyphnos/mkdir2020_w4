'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('./utils/pass');
const catRoute = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute.js');
const authRoute = require('./routes/authRoute.js');
const port = 3000;

const loggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/form');
    }
};

app.use(cors());
app.use(express.static('week2_public_html'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/authRoute', authRoute);
app.use('/userModel', passport.authenticate('jwt', {session: false}));

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/form'}),
    (req, res) => {
        console.log('success');
        res.redirect('/secret');
    });

app.get('/secret', loggedIn, (req, res) => {
    res.render('secret');
});

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
