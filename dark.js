function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('#interno2, #interno3, #artigo1, #artigo2, #banda, #Champignon, #RenatoPelado, #Marcão, #Thiago, #v1, #v2, #v3, #v4, #v5, #v6').forEach(element => {
        element.classList.toggle('dark-mode');
    });
}