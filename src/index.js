const express = require("express");
const mongoose = require('mongoose');

const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/base.error");
const errorhandlers = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const Probelm = require("./models/problem.model");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "server is running well " });
});

app.use(errorhandlers);

app.listen(PORT, async () => {
  console.log(`server started at PORT : ${PORT}`);

  await connectToDB();
  console.log("successfully connected to DB");

  // just for checking 

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// Probelm.create({

// })
});
