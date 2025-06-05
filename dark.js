
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
        musicas: "musicas",
        banda: "banda",

        // pagina principal
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

            // pagina musica abaixo 
        veja: "veja algumas musicas que a banda fez",

        spotify: "você também pode ouvir no Spotify",

            // pagina sobre a banda a baixo
        Charlie:"A banda Charlie Brown Jr",
        Champignon:"quem foi Champignon",
        Pelado: "quem foi Renato Pelado",
        Marcão: "quem foi Marcão",
        Thiago: "quem foi Thiago ",

        aBanda:"A banda",       
        emSantos: "A banda Charlie Brown Jr. foi formada em Santos, por Chorão (Alexandre Magno), Champignon, Renato Pelado, Marcão e Thiago que, ainda sem nome, começou a se apresentar na cidade e só foi batizada em 1992.",
        em2002: "Em 2002, a banda já fazia sucesso e tinha seu público fiel. Os primeiros álbuns da banda traziam músicas que criticavam o sistema capitalista, a classe política e denunciavam as desigualdades sociais e a passividade do povo brasileiro.",
        

        Champignon1:"Champignon se apaixonou pela música bem novinho, quando viajava de navio com a família e via o pai e os marinheiros tocando no convés. Aos seis começou a tocar e aos sete matriculou-se em violão clássico no Conservatório Heitor Villa Lobos. Aos 10 decidiu que seria baixista.",
            Champignon2:"Iniciou sua vida musical aos 12 anos de idade. Foi na banda What's Up que o baixista e Chorão trabalharam juntos pela primeira vez. Na época, Chorão era vocalista da banda. Depois que Chorão saiu da banda, Champignon continuou alguns meses, mas depois saiu. E a convite de Chorão, começou uma nova banda, e assim começava o Charlie Brown Jr.",
                Champignon3:"Seu apelido foi dado pelo Chorão comparando seu penteado peculiar a um cogumelo, já que segundo o próprio, \"meu cabelo é horrível e só cresce para cima\"",

        Renato1:"Renato Pelado se interessou pela música graças à vitrola que o pai tinha em casa, e os primeiros discos que comprou foram do KISS e do Kansas A partir da adolescência, ele passou longos anos tocando MPB em bares de Santos, enquanto iniciava sua carreira autoral no rock ao lado da banda Vulcano, parte importante da cena de Death Metal no litoral paulista.",
            Renato2:"Antes de entrar para o Charlie Brown, Pelado tocava com Marcão em outra banda chamada Last Joker. Conta ele que Chorão estava vendo um show, chegou perto da bateria e disse: \"Pô, um dia a gente vai tocar junto!\". Algum tempo depois, essa banda acabou e junto, acabou também a banda de Thiago Castanho, e o Charlie Brown também tinha acabado pois os guitarristas e o baterista tinham saído da banda. E já que precisavam de baterista, Chorão o convidou para tocar e ele aceitou, pois já tinha gostado das fitas demo que Chorão havia mostrado para ele. O Charlie Brown precisava de outro guitarrista (Marcão nessa época já estava na banda) o primeiro nome em mente foi Thiago Castanho que já era amigo de Pelado, pois já haviam tocado juntos também. Com isso surgiu a primeira formação do Charlie Brown Jr. ",
        
        Macarao1: "Marcão antes de ingressar o Charlie Brown Jr., estudou Farmácia e Bioquímica, Jornalismo, Propaganda e Marketing. Foi professor de guitarra e corretor de imóveis.",
            macarao01:"Como músico, foi um dos integrantes da banda Last Joker, onde dividia o palco com Cristopher Clark, que em 2016 venceu a primeira edição do reality X-Factor Brasil. Essa bagagem com o Last Joker moldou o guitarrista, evidenciando o seu ecletismo como músico, características essas que podem ser comprovadas em seu trabalho com o Charlie Brown Jr",
        MacaraoTitolo1:"Saídas do Charlie Brown Jr. e novos projetos",
            Macarao2: "Em 2005, Marcão deixou o Charlie Brown Jr., juntamente com Champignon e Renato Pelado, alegandodivergências profissionais e com Chorão; e fundou a banda TH6, com a qual gravou o álbum ContraInsetos Parasitas, em 2008.",
                Macarao02:"Já depois de se tornar notório no país com o Charlie Brown Jr., integrou o supergrupo Rockfellas em 2007, com os músicos Paul Di'Anno (Iron Maiden), Canisso (Raimundos) e Jean Dolabella (na época, baterista do Sepultura)",
        MacaraoTitolo2:"Retorno ao Charlie Brown Jr.",
            Macarao3:"Em 2011, Marcão retornou ao Charlie Brown Jr. e a banda voltou a ser um quinteto, em uma apresentação da banda no Viradão Carioca, em Bangu, no Rio de Janeiro, no dia 21 de maio daquele ano.",
                Macarao03:" Após este retorno, grava mais dois álbuns com o Charlie Brown Jr., Música Popular Caiçara (2012) eLa Familia 013 (2013).",

        thiago1:"Por incentivo de uma irmã, Thiago começou a tocar guitarra aos 13 anos. Em 1995, entrou na banda Charlie Brown Jr., onde gravou os três primeiros discos, que trouxeram reconhecimento a nível nacional a banda. ",
            thiago01: "No início, Thiago teve aulas de guitarra com o também guitarrista do Charlie Brown Jr., Marcão Britto. ",
                thiago11:" Em 2001, alegando cansaço, deixou a banda para se dedicar a projetos paralelos. Fundou as bandas Aliados e Power S.A., abriu um estúdio em Santos, chamado Digital Grooves e cursou durante um semestre uma faculdade de administração. Em 2004, além das novas bandas, Thiago participou do Acústico MTV da banda Ira!, através de um convite do produtor Rick Bonadio. ",
                    thiago21:" guitarrista juntou-se aos Aliados, onde lançou dois álbuns, Aliados 13 em 2002 e A Dose Certa em 2004. Em 2005, se desligou dos Aliados e retornou ao Charlie Brown Jr..",
        thiagotitolo1:"Retorno ao Charlie Brown Jr.",
        thiago2: "Em 2005, Thiago retornou ao Charlie Brown Jr. e gravou mais três álbuns com a banda, sendo eles: Nadando com os Tubarões (2006), Ritmo, Ritual e Responsa (2007) e Camisa 10 Joga Bola Até na Chuva (2009).",
            thiago02:"Em 2013, Thiago deixou o Charlie Brown Jr. novamente, após a morte de Chorão, e se dedicou a projetos paralelos.",
                thiago12:"Em 2014, Thiago lançou seu primeiro álbum solo intitulado \"Thiago Castanho\".",
            
        
    },

    en: {
        musicas: "songs",
        banda: "band",

        // pagina principal
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

        mesmoApos: "Even after his death in 2013, Chorão's music continues to be celebrated and played, and he is remembered as one of the great names in national rock.",

            // pagina musica abaixo 
        veja: "see some songs that the band made",

        spotify: "you can also listen on Spotify",

            // pagina sobre a banda a baixo
        Charlie: "The band Charlie Brown Jr",
        Champignon: "who was Champignon",
        Pelado: "who was Renato Pelado",
        Marcão: "who was Marcão",
        Thiago: "who was Thiago",

        aBanda: "The band",
        emSantos: "The band Charlie Brown Jr. was formed in Santos, by Chorão (Alexandre Magno), Champignon, Renato Pelado, Marcão and Thiago who, still without a name, began to perform in the city and was only named in 1992.",
        em2002: "In 2002, the band was already successful and had its loyal audience. The band's first albums featured songs that criticized the capitalist system, the political class and denounced social inequalities and the passivity of the Brazilian people.",

        Champignon1: "Champignon fell in love with music very young, when he traveled by ship with his family and saw his father and sailors playing on deck. He started playing at the age of six and enrolled in classical guitar at the Heitor Villa Lobos Conservatory at the age of seven. At 10 he decided he would be a bassist.",
            Champignon2: "He started his musical life at the age of 12. It was in the band What's Up that the bassist and Chorão worked together for the first time. At the time, Chorão was the band's vocalist. After Chorão left the band, Champignon continued for a few months, but then left. And at Chorão's invitation, he started a new band, thus starting Charlie Brown Jr.",
                Champignon3: "His nickname was given by Chorão comparing his peculiar hairstyle to a mushroom, since according to him, \"my hair is horrible and only grows up\"",

        Renato1: "Renato Pelado became interested in music thanks to the record player his father had at home, and the first records he bought were from KISS and Kansas. From adolescence, he spent long years playing MPB in bars in Santos, while starting his own rock career with the band Vulcano, an important part of the death metal scene on the São Paulo coast.",
            Renato2: "Before joining Charlie Brown, Pelado played with Marcão in another band called Last Joker. He says that Chorão was watching a show, came up to the drums, and said, \"Hey, one day we're going to play together!\" Some time later, that band ended, as did Thiago Castanho's band, and Charlie Brown also broke up because the guitarists and drummer had left the band. Since they needed a drummer, Chorão invited him to play, and he accepted because he already liked the demo tapes Chorão had shown him. Charlie Brown needed another guitarist (Marcão was already in the band at that time), and the first name that came to mind was Thiago Castanho, who was already a friend of Pelado as they had played together before. This is how the first lineup of Charlie Brown Jr. was formed.",

        
        
        Macarao1: "Marcão before joining Charlie Brown Jr., studied Pharmacy and Biochemistry, Journalism, Advertising and Marketing. He was a guitar teacher and a real estate agent.",
            macarao01: "As a musician, he was one of the members of the band Last Joker, where he shared the stage with Cristopher Clark, who in 2016 won the first edition of the X-Factor Brasil reality show. This experience with Last Joker shaped the guitarist, highlighting his eclecticism as a musician, characteristics that can be proven in his work with Charlie Brown Jr.",
        MacaraoTitolo1: "Departures from Charlie Brown Jr. and new projects",
            Macarao2: "In 2005, Marcão left Charlie Brown Jr., along with Champignon and Renato Pelado, citing professional disagreements with Chorão; and formed the band TH6, with which he recorded the album ContraInsetos Parasitas in 2008.",
            Macarao02:"After becoming well-known in the country with Charlie Brown Jr., he joined the supergroup Rockfellas in 2007, with musicians Paul Di'Anno (Iron Maiden), Canisso (Raimundos) and Jean Dolabella (at the time, drummer for Sepultura).",
        MacaraoTitolo2: "Return to Charlie Brown Jr.",
        Macarao3: "In 2011, Marcão returned to Charlie Brown Jr. and the band became a quintet again, in a performance by the band at Viradão Carioca, in Bangu, Rio de Janeiro, on May 21 of that year.",
            Macarao3:" After this return, he recorded two more albums with Charlie Brown Jr., Música Popular Caiçara (2012) and La Familia 013 (2013).",

        thiago1: "At the encouragement of a sister, Thiago started playing guitar at the age of 13. In 1995, he joined the band Charlie Brown Jr., where he recorded the first three albums, which brought national recognition to the band.",
        thiago01: "In the beginning, Thiago took guitar lessons with Marcão Britto, who was also a guitarist for Charlie Brown Jr.",
            thiago11: "In 2001, citing fatigue, he left the band to dedicate himself to side projects. He founded the bands Aliados and Power S.A., opened a studio in Santos called Digital Grooves and attended a semester of business school.",
                thiago21: "The guitarist joined Aliados, where he released two albums, Aliados 13 in 2002 and A Dose Certa in 2004. In 2005, he left Aliados and returned to Charlie Brown Jr."
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

