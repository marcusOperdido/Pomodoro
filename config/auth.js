//para estruturar a autnetiicaão precisa existir a config e a auth

import { Strategy as localStrategy } from "passport-local"
import { model } from "mongoose"
import { compare } from "bcryptjs"
import passport from "passport"
import Usuario from "../models/Usuarios.js";

//Model de usuario





export default function(passport){
//função para veriricar se a senha bate ou se o usuario nao existe

passport.use(new localStrategy({usernameField: 'email', passwordField: "senha" }, function(email, senha, done){ //passowordfild traduz uma palavra
  Usuario.findOne({email: email}).then(function(usuario){
        
    if(!usuario){
            return done( null, false, {message: "esta conta nao existe"})
        }

        compare(senha, usuario.senha, function(err, batem){
            if(err) return done(err)
            if(batem){
                return done(null, usuario)
            }else{
                return done(null, false, {message: "senha incorreta"})
            }
        })
    })  .catch(function(err){
                return done(err)
            })
}))

passport.serializeUser( function(usuario, done){
        done (null, usuario.id)
}) //salvar dados de usuarios em uma sessao


passport.deserializeUser(async function(id, done){
    try {
        const usuario = await Usuario.findById(id)
        done(null, usuario)
    } catch (err) {
        done(err, null)
    }
})//acha usuario pelo id
}
