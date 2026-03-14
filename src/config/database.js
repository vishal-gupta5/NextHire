const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection is established!");
  } catch (error) {
    console.log("Database connection is not established!");
    console.log(`Error: ${err}`);
  }
};

module.exports = connectDB;
