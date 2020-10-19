"use strict";
const form = document.querySelector(".form");
const inputName = document.querySelector(".js-input-name");
const inputLastName = document.querySelector(".js-input-lastName");
const name = document.querySelector(".name");
const lastName = document.querySelector(".lastName");

function paint() {
  const inputNameValue = inputName.value;
  const inputLastNameValue = inputLastName.value;
  name.innerHTML = inputNameValue;
  lastName.innerHTML = inputLastNameValue;
  const user = {
    name: inputNameValue,
    lastName: inputLastNameValue,
  };
  localStorage.setItem("user", JSON.stringify(user));
}

form.addEventListener("keyup", paint);

function uploadName() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  inputName.value = savedUser.name;
  inputLastName.value = savedUser.lastName;
  name.innerHTML = savedUser.name;
  lastName.innerHTML = savedUser.lastName;
}
uploadName();
