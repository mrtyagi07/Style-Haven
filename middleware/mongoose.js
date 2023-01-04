import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const DB = process.env.DATABASE;
console.log(mongoose.connection.readyState);

const connectDb = (handler) => async (req, res) => {
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  return handler(req, res);
};

export default connectDb;
