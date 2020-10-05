"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
const userImg = document.querySelector(".user__avatar"); //seleccionamos la clase de la img con una constante
//userImg.setAttribute("src", userAvatar); // con setAttribute añadimos atribumos a la const que hemos declarado antes, en este caso src y le decimos que sea la variable del enunciado.

userImg.setAttribute("src", userAvatar || DEFAULT_AVATAR); // Aquí elige uno u otro.
