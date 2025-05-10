const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/funcionarios", async (req, res) => {
  try {
    const funcionarios = await User.findAll();
    res.render("funcionarios", { funcionarios }); 
  } catch (err) {
    console.log(err);
    res.status(500).send("Erro ao buscar funcionários");
  }
});

module.exports = router;