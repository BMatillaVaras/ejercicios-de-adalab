"use strict";
const btn = document.querySelector(".js-serch");
const name = document.querySelector(".h2");
const repos = document.querySelector(".repos");
const avatar = document.querySelector(".img");

function getUser() {
  const input = document.querySelector(".js-input").value;
  console.log(input);
  fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      name.innerHTML += data.login;
      repos.innerHTML += data.public_repos;
      avatar.setAttribute("src", data.avatar_url);
    });
}
btn.addEventListener("click", getUser);
