const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("./db/db");
db.connectToDB();
const app = express();
const authRouter = require("./routes/auth_route");

app.use(express.json());
app.use(cors());

app.use("/", authRouter);

app.get("/test", (req, res) => {
  res.send("hellow from other side");
});

app.listen(process.env.PORT, () => {
  console.log(`Server runnning at ${process.env.PORT}`);
});
