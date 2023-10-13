const express = require("express");


const router = express.Router();

// Home page route
router.post("/", function (req, res) {

    let dados = req.body;
    let dadosSalvos =  require("../data/users.json");
    dadosSalvos.users.push(dados)
    
    const fs = require("fs")
    fs.writeFileSync("./data/users.json",JSON.stringify(dadosSalvos), err => {
      if (err) throw err; 
      console.log("Done writing"); // Success
    });

    res.send("Salvo");
});

// About pagex route
router.get("/about", function (req, res) {
  res.send("Essa rota retona a respostas");
});

module.exports = router;