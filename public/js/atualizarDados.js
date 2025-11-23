//feito por mim, adicionado a parte de enviar requeriento do tempo pelo gpt. necessario revisao
function atualizarDados() {
    const tempo = document.getElementById('tempo').value;  // Pega o valor do input 'tempo'

    fetch("/pomodoro/contador/subir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // Indica que estamos enviando JSON
        },
        body: JSON.stringify({ tempo: tempo })  // Envia o valor de 'tempo' no corpo da requisição
    })
    .then(function (response) {
        // Aqui você pode fazer algo com a resposta, se necessário
        return response.json();
    })
    .then(function (data) {
        console.log("Resposta do servidor:", data);
    })
    .catch(function (err) {
        console.error("Erro na função atualizarDados:", err);
    });
}
