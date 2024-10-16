import mongoose from "mongoose";

const mongodbConnection = (uri, app, port) => {
  //connecting mongodb
  mongoose
    .connect(uri)
    .then(() => {
      console.log("mongodb connected successfully");

      //starting server on express with port from dotenv file
      app.listen(port, () => {
        console.log(`server started on http://localhost/${process.env.PORT}`);
      });
    })
    .catch((err) => console.log(`mongodb connection error:-- ${err}`));
};

export default mongodbConnection;
