const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});
app.post("/login", async (req, res) => {
  const { Login_data, password } = req.body;
  try {
    const check = await collection.findOne({ Login_data: Login_data });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});
app.post("/signup", async (req, res) => {
  const { Login_data, password } = req.body;
  const data = {
    Login_data: Login_data,
    password: password,
  };
  try {
    const check = await collection.findOne({ Login_data: Login_data });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/phone", async (req, res) => {
  const { Login_data, password } = req.body;
  const data = {
    Login_data: Login_data,
    password: password,
  };
  try {
    const check = await collection.findOne({ Login_data: Login_data });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.listen(8000, () => {
  console.log("port is connected");
});
