const users = ["john", "octopus"];

const posts = [
  {
    id: 0,
    username: "john",
    text: "john",
    image_url: "https://...",
    likes: ["octopus"],
    date_posted: new Date(),
    comments: [
      {
        username: "octopus",
        text: "I love this post",
        likes: ["john"],
      },
    ],
  },
];

const addPost = (username, text, image_url) => {
  const post = {
    id: posts.length,
    username,
    text,
    image_url,
    likes: [],
    date_posted: new Date(),
    comments: [],
  };
  posts.append(post);
  return post;
};

const getPosts = () => posts;

const getPost = (postId) => posts[postId];

const addComment = (postId, username, text) => {
  const comment = {
    username,
    text,
    likes: [],
  };
  getPost(postId).comments.push(comment);
  return comment;
};

const likePost = (postId, username) => {
  getPost(postId).likes.push(username);
  return getPost(postId);
};

const likeComment = (postId, commentId, username) => {
  getPost(postId).comments[commentId].likes.push(username);
  return getPost(postId);
};

module.exports = {
  addPost,
  getPosts,
  getPost,
  addComment,
  likePost,
  likeComment,
};
