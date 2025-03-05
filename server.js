const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server running on port " + port);
});
