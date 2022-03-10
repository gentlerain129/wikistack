const express = require("express");
const router = express.Router();
const { addPage } = require("../views");
const { Page } = require("../models");

router.get("/", (req, res, next) => {
  res.send("all wiki pages");
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const page = await Page.create({
      title: "Sequelize",
      content: "SQL",
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    // res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  //   const newpage = addPage();
  //   console.log(newpage);
  res.send(addPage());
});

module.exports = router;
