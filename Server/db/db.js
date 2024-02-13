import mongoose from "mongoose";
const connectDb = async (MONGO_URL) => {
  try {
    const DB_OPTION = {
      dbName: "Student-Details",
    };
    await mongoose.connect(MONGO_URL, DB_OPTION);
    console.log("Connected to MongoDb Database");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
