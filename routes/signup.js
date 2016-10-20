const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

router.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope: ['email']
    }));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/posts',
        failureRedirect: '/login'
    }));

router.get('/', function(req, res, next) {
    res.render('signup')
});

router.post('/', (req, res, next) => {

    knex('users')
        .where('email', req.body.email)
        .then((user) => {
          console.log('user:' , user);
            if (user.length === 0) {

                const hashed_password = bcrypt.hashSync(req.body.password, 8)

                const newUserObj = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    user_name: req.body.user_name,
                    image: req.body.image,
                    hashed_password: hashed_password
                }

                knex('users')
                    .insert(newUserObj, '*')
                    .then((users) => {
                        const id = users[0].id
                        knex('users')
                            .where('id', id)
                            .first()
                            .then((returnUserObject) => {
                                req.session.userInfo = returnUserObject;
                                res.redirect('posts')
                            })
                    })
            } else {
                res.render('error', {
                    message: "A user with email already exists. Please login.",
                    button_title: "Log In",
                    route: "/login"
                })
            }
        })
})

module.exports = router;
