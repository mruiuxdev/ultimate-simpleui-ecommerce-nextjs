import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connect.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
