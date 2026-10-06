const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://medhanshbhatt65_db_user:IwIGOkJDWSK3Iytk@yt-backend.7jtnqf7.mongodb.net/halley",
  );
  console.log("Connect to DB");
}
module.exports = connectDB;
