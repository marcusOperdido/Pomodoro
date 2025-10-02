import express from "express";


//import mongoose from "mongoose";
const router = express.Router();
export default router;



router.get('/', (req, res) => {
    res.send({ ok: true })
});

router.get("/login", function(req,res){
    res.render("pomodoro/login")
})




//reaproveitamento de função

router.post("/login", function(req, res){
    
    
    var erros =[]

//Sistema de validação de cadastramento
   if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
    erros.push({texto: "Nome inválido"})
}

if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
    erros.push({texto: "Email inválido"})
}

if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
    erros.push({texto: "Senha inválida"})
}

if(req.body.senha != req.body.senha2){
    erros.push({texto: "Senhas diferentes"})
}



if (erros.length > 0) {
    res.render("usuarios/registro", { erros: erros }) // envia os erros para a página
} else {
    Usuario.findOne({ email: req.body.email }).then(function (usuario) { // procura o email no banco
        if (usuario) {
            req.flash("error_msg", "Usuário já cadastrado")
            res.redirect("/usuarios/registro")
        } else {
            const novoUsuario = new Usuario({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha

            })

            // Gerando o hash da senha
            bcrypt.genSalt(10, (erro, salt) => {
                if (erro) {
                    req.flash("error_msg", "Houve um erro ao gerar o salt")
                    return res.redirect("/registro")
                }

                bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                    if (erro) {
                        req.flash("error_msg", "Houve um erro durante o salvamento do usuário")
                        return res.redirect("/")
                    }

                    // Substitui a senha original pelo hash
                    novoUsuario.senha = hash

                    novoUsuario.save()
                        .then(() => {
                            req.flash("success_msg", "Usuário cadastrado com sucesso")
                            res.redirect("/")
                        })
                        .catch((error) => {
                            req.flash("error_msg", "Não foi possível cadastrar o usuário")
                            res.redirect("/login")
                        })
                })
            })
        }
    }).catch(function (err) {
        req.flash("error_msg", "Houve um erro interno")
        res.redirect("/")
    })
}
})