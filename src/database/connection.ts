import mongoose from 'mongoose'


let database : mongoose.Connection;

export const connect = () => {
    // add your own uri below
    const uri = "mongodb+srv://greg:1234@cluster0.hiss5.mongodb.net/storage"
    console.log(uri)
    if (database) {
      return;
    }
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    database = mongoose.connection;
    database.once("open", async () => {
      console.log("Connected to database");
    });
    database.on("error", () => {
      console.log("Error connecting to database");
    });
  };
  export const disconnect = () => {
    if (!database) {
      return;
    }
    mongoose.disconnect();
  };