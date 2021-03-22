const express = require("express");
const cors = require("cors");
const characters = require("./data.json");

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

//api endpoints

app.get("/users/:id", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.id);

  //find user by userId
  const character = characters.results.find(
    (character) => character.id === parseInt(req.params.id)
  );

  if (character === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    const result = {
      user: character.id,
      order: req.params.orderId,
    };
    res.json(character);
  }
});

app.get("/users/:id/episodes", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.id);
  console.log("Url param episodes:", req.params.episodes);

  //find user by userId
  const character = characters.results.find(
    (character) => character.id === parseInt(req.params.id)
  );

  if (character === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    const episodes = character.episode;
    res.json(episodes);
  }
});
