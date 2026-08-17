document.addEventListener("DOMContentLoaded", function () {
    // Entrada suave da página
    document.body.classList.add("entrando");

    // Botão para mudar para o modo claro
    const botaoTema = document.querySelector(".modo-claro");

    if (botaoTema) {
        botaoTema.addEventListener("click", function () {
            // Inicia a animação de saída
            document.body.classList.remove("entrando");
            document.body.classList.add("saindo");

            // Aguarda a animação terminar
            setTimeout(function () {
                window.location.assign("../pages-clara/game.html");
            }, 500);
        });
    }
});
