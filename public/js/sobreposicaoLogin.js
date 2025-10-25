  function abrirModal() {
    document.getElementById("loginModal").classList.add("show");
  }

  function fecharModal() {
    document.getElementById("loginModal").classList.remove("show");
  }

  // Fecha ao clicar fora
  window.onclick = function (e) {
    const modal = document.getElementById("loginModal");
    if (e.target === modal) modal.classList.remove("show");
  };