import express from "express";
import mongoose from "mongoose";
import Usuario from "../../models/Usuarios.js";

const router = express.Router();

//estrutara facil mas necessario estudar melhor


//pegamos os usuarios e colocamos em uma variavel
router.get("/listaUsuario", async function(req, res){
    try{
    const todosUsuarios = await Usuario.find().lean();
    res.render("admin/admin", {usuarios: todosUsuarios})
    
   
    }catch(err){
        console.log("deu erro", err)
        res.redirect("/")


    }
})


export default router