
    const toggleButton = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('icon');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            icon.textContent = '🌜'; // Muda para lua no modo escuro
        } else {
            icon.textContent = '🌞'; // Muda para sol no modo claro
        }
    });
