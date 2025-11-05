import mongoose from "mongoose";

const dbConnect = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Configure it in your environment.");
  }
  await mongoose.connect(uri);
  console.log("Database connected successfully");
};

export default dbConnect;
