"use strict";

const btnElement = document.querySelector(".button");
const btnElement2 = document.querySelector(".button1");
function btnClick (event){
  const selectedBtn = event.currentTarget;
  selectedBtn.classList.toggle('decoration');;
}

btnElement.addEventListener('click',btnClick);
btnElement2.addEventListener('click',btnClick);
