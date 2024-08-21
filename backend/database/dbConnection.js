import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    // .connect("mongodb+srv://shashank:Hnu6yXMLlrR46hNg@cluster0.p6qjw.mongodb.net/?retryWrites=true")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database:`);
    });
};
