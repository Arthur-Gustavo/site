// Exemplo de interatividade com JavaScript
document.addEventListener('DOMContentLoaded', function () {
    console.log('O site foi carregado!');

    // Exemplo: Alerta ao clicar no título
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', function () {
        alert('Você clicou no título!');
    });
});