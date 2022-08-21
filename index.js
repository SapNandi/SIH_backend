const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chatRoute = require("./routes/ChatRoute");
const messageRoute = require("./routes/MessageRoute");
const authRoute = require("./routes/AuthRoute");
const cors = require("cors");
const bodyParser = require('body-parser');

mongoose
  .connect("mongodb://localhost:27017/SIH_Chat")
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((error) => {
    console.log("Something Went Wrong...");
  });

const PORT = 80 || 8080;

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/chat", chatRoute);
app.use("/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server Connected to http://localhost:${PORT}`);
});
