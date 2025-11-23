import express from "express";
import bcrypt from "bcryptjs";
import Usuario from "../../models/Usuarios.js";
import { ValidadorDeLogin } from "../../controllers/validador.js";
import passport from "passport";
import estaLogado from "../../controllers/controledesessao.js";
import path from "path";




const router = express.Router()




// Rotas

router.get("/", (req, res) => {
  res.send({ ok: true });
});



//LOGANDO

router.get("/login", function (req, res) {
  res.render("pomodoro/login");
});

router.get("/graficos", /*estaLogado*/ function (req, res) {
  res.render("pomodoro/graficos");
});

router.post("/logar", function (req, res, next) {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "login",
    failureFlash: true,
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Deslogado com sucesso");
    res.redirect("/");
  });
});

router.post("/registro", ValidadorDeLogin);




//Subindo dados e atualizando Graficos 

router.post("/contador/subir", async function (req, res) {
    if(!req.user){
      console.log("nao ta logado nao vai salvar animal")
    }
    try{
      const usuario = await Usuario.findById(req.user._id)
      usuario.contador = timeTarget + contador;
      await usuario.save();
       
      console.log("usuario atualizado", usuario.contador)
    }catch{
      console.log("aaaaaa")
    }
});






export default router;
