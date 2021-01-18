"use strict";
const fs = require("fs");

const text = "Lorem ipsum";

const object = {
  originalContent: "Lorem ipsum",
  changedContent: "LOREM IPSUM",
  textLenght: 11,
};

// console.log(object);

const objectString = JSON.stringify(object);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", objectString, handleWriteFile);
