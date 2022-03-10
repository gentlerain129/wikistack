const express = require("express");
const app = express();
const { db } = require("./models");

const wiki = require("./routes/wiki");
const users = require("./routes/users");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.urlencoded({ extended: true }));

app.use("/wiki", wiki);
app.use("/users", users);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const initSync = async () => {
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
};

initSync();
