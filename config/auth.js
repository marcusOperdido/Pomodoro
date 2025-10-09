//feito por ia necessario revisão

import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import Usuario from "../models/Usuario.js";

export default function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, senha, done) => {
      Usuario.findOne({ email })
        .then((usuario) => {
          if (!usuario) {
            return done(null, false, { message: "Conta não encontrada" });
          }

          bcrypt.compare(senha, usuario.senha, (erro, match) => {
            if (match) return done(null, usuario);
            else return done(null, false, { message: "Senha incorreta" });
          });
        })
        .catch((err) => console.error(err));
    })
  );

  passport.serializeUser((usuario, done) => done(null, usuario.id));
  passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, usuario) => done(err, usuario));
  });
}
