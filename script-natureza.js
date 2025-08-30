const botoes = document.querySelectorAll(".btn");
const titulo = document.getElementById("titulo-msg");
const texto = document.getElementById("texto-msg");
const paper = document.getElementById("paper");

botoes.forEach(botao => {
  botao.addEventListener("mouseenter", () => {
    paper.classList.add("flipping");
    setTimeout(() => {
      titulo.textContent = botao.textContent;
      texto.textContent = botao.getAttribute("data-msg");
    }, 300);
    setTimeout(() => {
      paper.classList.remove("flipping");
    }, 600);
  });
});
