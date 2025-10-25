import express from "express";
import bcrypt from "bcryptjs";
import Usuario from "../../models/Usuarios.js"; // importa o model do usuário
import { ValidadorDeLogin } from "../../controllers/validador.js"


//import mongoose from "mongoose";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.get("/login", function (req, res) {
  res.render("pomodoro/login");
});


router.get("/graficos", function(req, res){
  res.render("pomodoro/graficos")
})



router.post("/login", ValidadorDeLogin);


export default router;
