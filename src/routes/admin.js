import express from "express";
import mongoose from "mongoose";
import Usuario from "../../models/Usuarios.js";
import { eAdmin } from "../../controllers/eAdmin.js";
const router = express.Router();

//estrutara facil mas necessario estudar melhor







//pegamos os usuarios e colocamos em uma variavel
router.get("/admin", eAdmin, async function(req, res){
    try{
    const todosUsuarios = await Usuario.find().lean();
    res.render("admin/admin", {usuarios: todosUsuarios})
    
   
    }catch(err){
        console.log("deu erro", err)
        res.redirect("/")
    }
})



router.post("/deletar/:id", function(req, res) {
  Usuario.deleteOne({ _id: req.params.id })
    .then(() => {
      req.flash("success_msg", "Usuário deletado com sucesso!");
      res.redirect("/admin/admin");
    })
})








export default router