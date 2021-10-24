const mongoose = require("mongoose");

// const mongoUri =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoUri =
  "mongodb+srv://Nikhil:euWppq372001@inotebook.kumwf.mongodb.net/iNotebook?retryWrites=true&w=majority";

const mongooseConnect = () => {
  mongoose.connect(mongoUri, () => {
    console.log("Mongoose connnected successfully");
  });
};

module.exports = mongooseConnect;
