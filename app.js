// IMPORTS
import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import flash from "connect-flash";
import session from "express-session";
import admin from "./src/routes/admin.js";
import pomodoro from "./src/routes/pomodoro.js";
import usuarios from "./models/Usuarios.js"; // Corrigido
import passport from "passport";
import authConfig from "./config/auth.js";

const app = express();
const PORT = process.env.PORT || 3030;

// Conexão MongoDB
mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch((err) => console.log("Erro MongoDB: " + err));
  

//mongodb+srv://marcus:marcus@cluster0.w63g7ye.mongodb.net/?appName=Cluster0


  
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






app.use(passport.initialize());
app.use(passport.session());
authConfig(passport);








// Middleware Flash (mensagens)
app.use(function(req, res, next) {
        res.locals.success_msg = req.flash("success_msg")   // cria variave global
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
       res.locals.user = req.user || null; // armazena os dados do usuario logado, caso nao exista vai ser repassado valor nulo
       next()
    })





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
app.use("/admin", admin);
app.use("/pomodoro", pomodoro);


// Inicializar servidor
app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Servidor rodando em http://0.0.0.0:${PORT}`);""
});
