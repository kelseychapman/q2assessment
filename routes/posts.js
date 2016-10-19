var express = require('express');
var router = express.Router();

const authorize = (req, res, next) => {
    if (!req.session.userInfo) {
        res.render('error', {
            message: "SORRRYYYYY you're note signed in yet"
        });
    }
    next();
}

router.get('/', authorize, (req, res, next) => {
  let allPromises = [];
  allPromises.push(
  knex('posts')
      .then((posts) => {
          res.render('posts', {
            posts: posts,
            id: posts.id,
            post_title: posts.post_title,
            content: posts.content,
            date_created: posts.created_at,
            date_updated: posts.updated_at
          })
      }))
      return Promise.all(allPromises);
});


module.exports = router;
