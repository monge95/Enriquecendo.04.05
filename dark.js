
 document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('icon');

    // Verifica se o usuário já tem uma preferência de tema
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        icon.textContent = '🌜';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        icon.textContent = isDarkMode ? '🌜' : '🌞';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});

// adicio botão que muda o idioma do site
const translations = {
    pt: {
        quemFoiChorão : "quem foi chorão",

        aMorteDoCantor: "A morte do cantor Alexandre Magno Abrão, mais conhecido como Chorão, completa 11 anos nesta quarta-feira (6). Relembre abaixo momentos marcantes da vida do músico.",

        nascidoEmTremembe: "Nascido em Tremembé, mas famoso por falar de sua relação com a cidade de Santos, em São Paulo, Chorao foi um dos mais importantes nomes do rock nacional, pela banda Charlie Brown Jr.",

        eleMorreu: "Ele morreu de uma overdose de cocaína aos 42 anos e deixou um filho, Alexandre Ferreira Lima Abrão. Em 2021, um documentário sobre a vida de Chorão foi lançado.",

        cliqueNeste: "Clique neste link para saber como e onde assistir.",

        vejaMais: "Veja mais deste artigo aqui",

            // comeso do artigo 2

        importância: "Qual a sua importância na música?",

        aMorte:"A morte do cantor Alexandre Magno Abrão, mais conhecido como Chorão, completa 11 anos nesta quarta-feira (6). Relembre abaixo momentos marcantes da vida do músico.",

        pionerismo: "Pioneirismo no rock nacional",

        chorãoFoi: "Chorão foi uma figura central na cena do rock brasileiro nos anos 1990 e 2000, ajudando a popularizar o estilo com letras que misturavam questões sociais, amorosas e experiências pessoais.",

        letras: "Letras Autênticas:",

        suasLetras: "Suas letras eram marcadas por uma linguagem direta e verdadeira, abordando temas que ressoavam com a juventude, como a busca por identidade, conflitos internos e críticas sociais.",

        influencia: "Influência Cultural:",

        seTornou:"Charlie Brown Jr. se tornou um ícone cultural no Brasil, e a música de Chorão influenciou muitas novas bandas e músicos. A mistura de estilos, como rock, rap e reggae, trouxe uma nova sonoridade ao cenário musical.",  
        
        mesmoApos:"Mesmo após sua morte em 2013, a música de Chorão continua sendo celebrada e tocada, e ele é lembrado como um dos grandes nomes do rock nacional.",

    },

    en: {
        quemFoiChorão: "Who was Chorão",

        aMorteDoCantor: "The death of singer Alexandre Magno Abrão, better known as Chorão, completes 11 years this Wednesday (6). Remember below memorable moments of the musician's life.",

        nascidoEmTremembe: "Born in Tremembé, but famous for talking about his relationship with the city of Santos, in São Paulo, Chorão was one of the most important names in national rock, through the band Charlie Brown Jr. ",

        eleMorreu: "He died of a cocaine overdose at the age of 42 and left a son, Alexandre Ferreira Lima Abrão. In 2021, a documentary about Chorão's life was released.",

        cliqueNeste: "Click this link to find out how and where to watch.",

        vejaMais: "See more of this article here",

                // comeso do artigo 2

        importância: "What is your importance in music?",

        aMorte: "The death of singer Alexandre Magno Abrão, better known as Chorão, completes 11 years this Wednesday (6). Remember below memorable moments of the musician's life.",

        pionerismo: "Pioneering in national rock",
         
        chorãoFoi: "Chorão was a central figure in the Brazilian rock scene in the 1990s and 2000s, helping to popularize the style with lyrics that mixed social, romantic and personal experiences.",

        letras: "Authentic Lyrics:",

        suasLetras: "His lyrics were marked by a direct and true language, addressing themes that resonated with youth, such as the search for identity, internal conflicts and social criticism.",

        influencia: "Cultural Influence:",

        seTornou: "Charlie Brown Jr. became a cultural icon in Brazil, and Chorão's music influenced many new bands and musicians. The mix of styles, such as rock, rap and reggae, brought a new sound to the musical scene.",

        mesmoApos: "Even after his death in 2013, Chorão's music continues to be celebrated and played, and he is remembered as one of the great names in national rock."
    }

};

document.addEventListener('DOMContentLoaded', () => {
    // Tenta recuperar o idioma salvo ou define 'pt' como padrão
    const savedLanguage = localStorage.getItem('language') || 'pt';
    updateLanguage(savedLanguage);
});

function setLanguage(language) {
    localStorage.setItem('language', language);
    updateLanguage(language);
}

function updateLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

