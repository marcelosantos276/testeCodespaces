document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('nav a');
    // Seleciona todas as seções de conteúdo
    const sections = document.querySelectorAll('section');

    // Função para mostrar a seção correspondente e esconder as outras
    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
        menuLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    }

    // Adiciona evento de clique aos links do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Exibe a primeira seção por padrão
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});

