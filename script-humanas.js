const botoes = document.querySelectorAll(".btn");
const titulo = document.getElementById("titulo-msg");
const texto = document.getElementById("texto-msg");
const paper = document.getElementById("paper");

botoes.forEach(botao => {
  botao.addEventListener("mouseenter", () => {
    // animação de virar página
    paper.classList.add("flipping");

    // troca o texto na metade da animação
    setTimeout(() => {
      titulo.textContent = botao.textContent;
      texto.textContent = botao.getAttribute("data-msg");
    }, 300);

    // remove a classe no final
    setTimeout(() => {
      paper.classList.remove("flipping");
    }, 600);
  });
});

