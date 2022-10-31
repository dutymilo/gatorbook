
const tweetButtons = document.getElementsByClassName("tweet-button");
const tweetButton = tweetButtons[0];
const tweetTextAreas = document.getElementsByClassName("tweet-text-area");
const tweetTextArea = tweetTextAreas[0];
const userNames = document.getElementsByClassName("username-text-area");
const userName = userNames[0];

tweetButton.addEventListener("click", async function () {
  const tweetText = tweetTextArea.value;

});

async function getPosts() {
  const data = await fetch("/posts");
  return await data.json();
}

async function getPost(id) {
  const data = await fetch(`/posts/${id}`);
  return await data.json();
}

async function addPost(username, text, image_url) {
  const data = await fetch(`/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username,
      text,
      image_url,
    },
  });
  return await data.json();
}

async function addComment(postId, username, text) {
  const data = await fetch(`/comments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
      text,
    },
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  }});
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
  });
  return await data.json();
}

async function likePost(postId, username) {
  const data = await fetch(`/like-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      username,
    },
  });
  return await data.json();
}

async function likeComment(postId, commentId, username) {
  const data = await fetch(`/like-comment/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      postId,
      commentId,
      username,
    },
  });
  return await data.json();
}

//Have to change
function createTweet(tweetJson) {
  const parents = document.getElementsByClassName("tweet-feed");
  const parent = parents[0];
  const newTweet = document.createElement("div");
}
