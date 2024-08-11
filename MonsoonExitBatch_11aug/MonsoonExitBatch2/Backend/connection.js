const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://aromalsm1234:aromal123@cluster0.dhjfpa8.mongodb.net/newDB?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
