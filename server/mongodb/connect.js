import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.error("failed to connect with mongodb"));
};

export default connectDB;
