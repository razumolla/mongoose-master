import mongoose from "mongoose";
import app from "./app";
const port = 5000;

//databse connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practics-mongoose");
    console.log("DB Connection sucessfull");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log("Faild to connect database", error);
  }
}
bootstrap();
