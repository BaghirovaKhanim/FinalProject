const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(
      process.env.DB_CONNECTION.replace("<password>", process.env.DB_PASSWORD)
    )
    .then(() => {
      console.log("Connected!");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDatabase;
