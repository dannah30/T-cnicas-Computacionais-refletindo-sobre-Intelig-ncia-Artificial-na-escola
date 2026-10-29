const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

function iniciaJogo() {
  telaInicial.style.display = "none";
  alert("Sua missão começou! Boa sorte, detetive!");
}

botaoIniciar.addEventListener("click", iniciaJogo);