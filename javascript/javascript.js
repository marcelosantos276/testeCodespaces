// Menu sanduíche
        const menuBtn = document.getElementById('menu-btn');
        const nav = document.getElementById('nav');
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
        // Fechar menu ao clicar em um link (mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
            });
        });
        // Animação das seções ao rolar
        function revealSections() {
            document.querySelectorAll('section').forEach(section => {
                const rect = section.getBoundingClientRect();
                if(rect.top < window.innerHeight - 100) {
                    section.classList.add('visible');
                }
            });
        }
        window.addEventListener('scroll', revealSections);
        window.addEventListener('load', revealSections);