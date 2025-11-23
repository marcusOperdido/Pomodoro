function daDos() {
    fetch("/pomodoro/contador/subir", {
        method: "POST"
    })
    .then(() => console.log("Rota executada!"))
    .catch(err => console.error("Erro:", err));
}

window.daDos = daDos; // ← ESSENCIAL