const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://ashik:${process.env.PASSWORD}@cluster0.7kn9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected with database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
