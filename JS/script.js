// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  console.log("O script foi carregado!"); // Exibe uma mensagem no console para indicar que o script foi carregado corretamente

  // Seleciona o botão com o ID "btn" e adiciona um evento de clique
  document.getElementById("btn").addEventListener("click", function () {
    console.log("Botão clicado!"); // Exibe uma mensagem no console quando o botão é clicado

    // Faz a página rolar suavemente para o topo
    window.scrollTo({
      top: 0, // Define o destino da rolagem no topo da página (posição 0)
      behavior: "smooth", // Define que a rolagem deve ser suave, ao invés de instantânea
    });
  });
});