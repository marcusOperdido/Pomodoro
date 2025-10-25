//revisar
// IMPORTS
import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import flash from "connect-flash";
import session from "express-session";
import admin from "./src/routes/admin.js"

import pomodoro from "./src/routes/pomodoro.js";
import usuarios from "./models/Usuarios.js";


const app = express();
const PORT = process.env.PORT || 3030;

// Conexão MongoDB
mongoose
  .connect("mongodb://localhost:27017/pomodoroDB")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.log("Erro MongoDB: " + err));

// CSS
app.use(express.static("public"));

// Sessão e Flash
app.use(
  session({
    secret: "marses1211",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Middleware Flash (mensagens)
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// Configurar Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: "./src/views/layouts",
    partialsDir: "./src/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

// Middleware para formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.get("/", (req, res) => res.render("home"));
app.use("/admin", admin)
app.use("/pomodoro", pomodoro);
app.use("/usuarios", usuarios);
app.get("")

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
