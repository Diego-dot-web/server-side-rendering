const express = require("express");
const app = express();
const messsagesRouter = require("./routes/messages");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messsagesRouter);

app.listen(port);
