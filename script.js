import { postsArray } from "./data.js";

// Home
const title = document.querySelector(".title");
title.addEventListener("click", () => {
  window.location.replace("index.html");
});

// Featured Post
const featured = document.querySelector(".featured");
if (featured) {
  featured.addEventListener("click", () => {
    window.location.replace("featured.html");
  });
}

// Generate HTML for recent posts
function getRecentsHtml() {
  let recentsHtml = "";

  postsArray.forEach((post) => {
    recentsHtml += `
    <article class="post">
    <img
      src="${post.image}"
      alt="${post.title} Screenshot"
      draggable="false"
      class="post-image"
    />
    <p class="post-date">${post.date}</p>
    <h2 class="post-title">
        <a href="${post.url}" target="_blank">${post.title}</a>
    </h2>
    <p class="post-description">
      ${post.description}
    </p>
  </article>`;
  });
  return recentsHtml;
}

// Render recent posts
function render() {
  document.querySelector(".recents").innerHTML = getRecentsHtml();
}

render();
