var {
  addPost,
  getPosts,
  getPost,
  addComment,
  likePost,
  likeComment,
} = require("../lib/state");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/posts", function (req, res, next) {
  const posts = getPosts();
  res.json(posts);
});

router.get("/posts/:id", function (req, res, next) {
  const post = getPost(req.params.id);
  res.json(post);
});

router.post("/posts", function (req, res, next) {
  const image_url = !req.body.image_url ? req.body.image_url : "";
  const post = addPost(req.body.username, req.body.text, image_url);
  res.json(post);
});

router.post("/add-comment", function (req, res, next) {
  const comment = addComment(req.body.postId, req.body.username, req.body.text);
  res.json(comment);
});

router.post("/like-post", function (req, res, next) {
  const post = likePost(req.body.postId, req.body.username);
  res.json(post);
});

router.post("/like-comment", function (req, res, next) {
  const comment = likeComment(
    req.body.postId,
    req.body.commentId,
    req.body.username
  );
  res.json(comment);
});

module.exports = router;
