const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://test_user:test1234@cluster0.jkf5ho4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });
const newSchema = new mongoose.Schema({
  Login_data: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const collection = mongoose.model("collection", newSchema);
module.exports = collection;
