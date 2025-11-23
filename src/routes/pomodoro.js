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
   /* if(!req.user){
      console.log("nao esta ogado essa função não executa")
    }*/
    try{
      
    const usuario = await Usuario.findById({_id: req.user._id })
    const hoje = new Date()
    const contadorHoje = usuario.contador.find(cada => cada.dia.toDateString() === hoje.toDateString()); //metodo de comparação 
    const tempo = parseInt(req.body.tempo);
    console.log("Contador do dia:", contadorHoje ? contadorHoje.valor : "Nenhum contador registrado para hoje");
    
    //atualiza o contador do dia
    if(contadorHoje){
    contadorHoje.valor += tempo
    console.log("atualizado para", contadorHoje)
    }else{
     usuario.contador.push({
      dia: hoje,
      valor:tempo
     })
     console.log("novo tempo é esse aqui", tempo)
    }
    await usuario.save();
    

    //ESTUDAR ESSA PARTE E VER O QUE FAZ SE FAZ SENTIDO PARAMOS AQUI 
      const contadores = usuario.contador.map(c => ({
      dia: new Date(c.dia).toLocaleDateString(), // Formata a data de forma legível
      valor: c.valor
      }));
      res.status(200),jason(contadores)
  
    }catch(err){
    console.log("esse é meu primeiro",req.user)
    console.log("ainda tem esse erro", err)
    
  }
});






export default router;
