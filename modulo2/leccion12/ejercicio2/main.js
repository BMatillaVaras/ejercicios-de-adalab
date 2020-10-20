"use strict";
const newImg1 = document.createElement("img");
const containerImg = document.querySelector(".container-img");
newImg1.classList.add("img1");
containerImg.appendChild(newImg1);
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const select = document.querySelector(".select");

const images = function () {
  if (select.value === "1") {
    newImg1.src = "./images/madrid1.jpg";
    img1.src = "./images/madrid1.jpg";
    img2.src = "./images/madrid2.jpeg";
    img3.src = "./images/madrid3.jpg";
  } else if (select.value === "2") {
    img1.setAttribute("src", "./images/barcelona1.jpg");
    img2.setAttribute("src", "./images/barcelona2.jpg");
    img3.setAttribute("src", "./images/barcelona3.jpg");
  } else if (select.value === "3") {
    img1.setAttribute("src", "./images/londres1.jpg");
    img2.setAttribute("src", "./images/londres2.jpg");
    img3.setAttribute("src", "./images/londres3.jpg");
  }
};
select.addEventListener("change", images);
