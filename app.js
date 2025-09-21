import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = process.env.PORT || 3030;



//CSS
app.use(express.static("public"));

// Configurar Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main", // layout padrão
    layoutsDir: "./views/layouts", // pasta dos layouts
    partialsDir: "./views/partials" // pasta dos partials
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Rota
app.get("/", (req, res) => {
  res.render("home");
});




// Inicializar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
