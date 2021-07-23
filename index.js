const express = require("express");
const app = express();
require("./models/dbconfig");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/posts", postsRoutes);

app.listen(5500, () => console.log("server started: 5500"));
