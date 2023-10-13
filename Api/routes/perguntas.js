const express = require("express");

const router = express.Router();

// Home page route
router.get("/", function (req, res) {
    let data =  require("../data/perguntas");
    res.send(data);
});

// About pagex route
router.get("/about", function (req, res) {
  res.send("Essa rota retona a lista de perguntas e respostas");
});

module.exports = router;