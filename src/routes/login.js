//pagina feita totalmente por ia, necessário revisão com urgencia esta redundante com o pomodoro.js


import express from "express";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Usuario from "../models/Usuario.js";
import passport from "passport";

const router = express.Router();

// Página de login
router.get("/login", (req, res) => {
  res.render("/pomodoro/login");
});

// Página de cadastro
router.get("/registro", (req, res) => {
  res.render("/pomodoro/login");
});





// Login (usando passport)
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/pomodoro",
    failureRedirect: "/usuarios/login",
    failureFlash: true,
  })(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.flash("success_msg", "Logout realizado com sucesso");
    res.redirect("/");
  });
});

export default router;
