const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Esta es una página de prueba</h1>
      </body>
    </html>
`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const randomNumber = Math.round(Math.random() * 10);
  if (randomNumber % 2 === 0) {
    res.redirect("https://www.youtube.com");
  } else {
    res.redirect("https://www.instagram.com");
  }
});

app.get("/response-d", (req, res) => {
  res.json({ result: "ok" });
});
