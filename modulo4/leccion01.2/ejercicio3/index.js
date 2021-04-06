"use strict";
const fs = require("fs");

// const handleFile = (err, fileContent) => {
//   if (err !== null) {
//     console.log("Error:", err);
//   } else {
//     const object = {
//       originalContent: fileContent,
//       changedContent: fileContent.toUpperCase(),
//       textLength: fileContent.length,
//     };
//     console.log(object);
//   }
// };

// const objectString = JSON.stringify(object);

// const handleWriteFile = (err) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("The file has been saved!");
//   }
// };

// fs.readFile("./input-file.txt", "utf8", handleFile);

// fs.writeFile("./output-file.txt", objectString, handleWriteFile);

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input-file.txt", (fileContent) => {
  const objectText = {
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    textLength: fileContent.length,
  };
  const textString = JSON.stringify(objectText);
  writeFile("./output-file.json", textString, () => {
    console.log("The file has been copied");
  });
});
