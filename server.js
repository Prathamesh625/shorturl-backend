const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const mongourl =
  "mongodb+srv://prathameshthorat625:wBb3WeE39CwD5pr6@cluster0.z33ndt5.mongodb.net/shorturl?retryWrites=true&w=majority";

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", () => console.log("something wrong"));
db.once("open", () => console.log("connected to mongodb "));

app.use("/api", require("./short"));

app.listen(PORT, () => console.log(`running on port : ${PORT} `));
///
