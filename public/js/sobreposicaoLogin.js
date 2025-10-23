document.addEventListener("DOMContentLoaded", () => {
  const botoes = [
    
    { id: "botaogfLogin", msg: "Você clicou no botão LOGAR!" },
    
    
  ];

  botoes.forEach(botao => {
    const el = document.getElementById(botao.id);
    if (el) {
      el.addEventListener("click", () => alert(botao.msg));
    }
  });
});

