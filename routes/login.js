const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
    res.render('login')
});

router.post('/', (req, res, next) => {
  let allPromises = [];
  allPromises.push(
    knex('users')
        .where('email', req.body.email)
        .first()
        .then((user) => {
            const passwordMatch = bcrypt.compareSync(req.body.password, user.hashed_password)
            if (passwordMatch == false) {
                res.send('Bad email or password')
            } else {
                req.session.userInfo = user
                console.log(req.session.userInfo);
                res.redirect('posts')
            }
        })
        .catch((err) => {
            next(err);
        }))
        return Promise.all(allPromises)
});

module.exports = router;
