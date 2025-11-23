function estaLogado(req, res, next) {
    var erros = []
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }


    erros.push({ texto: "Você necessita ou logar ou registar" })
    res.render("pomodoro/login", {erros : erros});
}

export default estaLogado;