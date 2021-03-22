const express = require("express");
const cors = require("cors");
const users = require("./data.json");

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

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orderId:", req.params.orderId);

  //find user by userId
  const user = users.find(
    (user) =>
      user.userId === req.params.userId &&
      user.orderId.find((order) => order === req.params.orderId)
  );
  // const userOrders = users.find((user) =>
  //   user.orderId.find((order) => order === req.params.orderId)
  // );

  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    const result = {
      user: user.userId,
      order: req.params.orderId,
    };
    res.json(result);
  }
});
