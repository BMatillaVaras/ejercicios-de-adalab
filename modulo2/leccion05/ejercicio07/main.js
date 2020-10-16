"use strict";

const btnElement = document.querySelector(".button");

function btnClick (){
  btnElement.classList.toggle('button2');
}

btnElement.addEventListener('click',btnClick);
