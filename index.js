const express = require("express");
const app = express();
require("./models/dbconfig");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use(cors({ origin: "http://cdpn.io" }));
app.use("/posts", postsRoutes);

app.listen(5500, () => console.log("server started: 5500"));
