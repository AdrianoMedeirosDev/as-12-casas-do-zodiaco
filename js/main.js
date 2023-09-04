window.addEventListener('scroll', function(){
    let header = document.querySelector ('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function MudaDesenho(){
    const texto = document.querySelector("h1");
    const paragrafo = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;

    
    if(valor=="aries"){
        texto.innerHTML = "Cavaleiro de Pégaso (Seiya)";
        paragrafo.innerHTML = "Seiya é o Cavaleiro de Pégaso, representando o signo de Sagitário. Ele é um jovem destemido e apaixonado, conhecido por sua lealdade inabalável e determinação incansável. Sua armadura é adornada com asas majestosas e ele é reconhecido por sua velocidade e agilidade em combate. Seiya é um modelo de heroísmo, sempre disposto a lutar contra as forças do mal para proteger aqueles que ama.";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("100%","100vh");
    }

    if(valor=="aquario"){
        texto.innerHTML = "Cavaleiro de Cisne (Hyoga)";
        paragrafo.innerHTML = "Hyoga é o Cavaleiro de Cisne, representando o signo de Aquário. Ele é um indivíduo compassivo e introspectivo, capaz de manipular o gelo com habilidade extraordinária. Sua armadura reflete a elegância e a serenidade do cisne. Hyoga luta com um coração gentil, sempre pronto para proteger seus amigos e lutar pela justiça.";
        imagem.setAttribute("src","img/aquario.svg");
        imagem.setAttribute("100%","100vh");
    }

    else if(valor=="touro"){
        texto.innerHTML = "Cavaleiro de Touro (Aldebaran)";
        paragrafo.innerHTML = "Aldebaran é o Cavaleiro de Touro, representando o signo de Touro. Ele é conhecido por sua força colossal e coração generoso. Sua armadura de Touro é uma das mais resistentes, simbolizando sua determinação e resistência. Aldebaran é leal aos seus companheiros e sempre disposto a protegê-los com sua imensa força.";
        imagem.setAttribute("src","img/touro.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="gemeos"){
        texto.innerHTML = "Cavaleiro de Gêmeos (Saga e Kanon)";
        paragrafo.innerHTML = "Os irmãos Saga e Kanon compartilham a armadura de Gêmeos, representando o signo de Gêmeos. Saga é conhecido por sua dualidade, com uma personalidade dividida entre bem e mal. Kanon, apesar de sua inicial maldade, eventualmente se redime. Sua armadura de Gêmeos reflete essa dualidade, simbolizando a dualidade inerente ao signo.";
        imagem.setAttribute("src","img/gemeos.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="cancer"){
        texto.innerHTML = "Cavaleiro de Câncer (Deathmask)";
        paragrafo.innerHTML = "Deathmask é o Cavaleiro de Câncer, representando o signo de Câncer. Sua personalidade é complexa, mostrando crueldade e sadismo. Sua armadura de Câncer possui uma concha que protege seu peito, refletindo o caráter protetor do signo. Deathmask é um adversário implacável, com técnicas sombrias que ecoam as profundezas emocionais associadas a Câncer.";
        imagem.setAttribute("src","img/cancer.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="leao"){
        texto.innerHTML = "Cavaleiro de Leão (Aiolia)";
        paragrafo.innerHTML = "Aiolia é o Cavaleiro de Leão, representando o signo de Leão. Ele emana nobreza e confiança, sempre pronto para proteger os oprimidos. Sua armadura de Leão é majestosa e imponente, refletindo sua autoridade. Aiolia é um defensor da justiça e um exemplo de bravura para os Cavaleiros mais jovens.";
        imagem.setAttribute("src","img/leao.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="virgem"){
        texto.innerHTML = "Cavaleiro de Virgem (Shaka)";
        paragrafo.innerHTML = "Shaka é o Cavaleiro de Virgem, representando o signo de Virgem. Ele é um dos mais poderosos e sábios Cavaleiros, conhecido por sua natureza tranquila e profunda compreensão do universo. Sua técnica Tesouro do Céu é devastadora em batalha. Shaka personifica a pureza e a perfeição associadas ao signo de Virgem.";
        imagem.setAttribute("src","img/virgem.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="libra"){
        texto.innerHTML = "Cavaleiro de Libra (Dohko)";
        paragrafo.innerHTML = "Dohko é o Cavaleiro de Libra, representando o signo de Libra. Ele é um dos mais antigos e experientes Cavaleiros, mentor de Shiryu. Sua aparência jovial é contrastada por sua sabedoria e senso de justiça. Dohko é um defensor da harmonia e do equilíbrio, valores intrínsecos ao signo de Libra.";
        imagem.setAttribute("src","img/libra.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="escorpiao"){
        texto.innerHTML = "Cavaleiro de Fênix (Ikki)";
        paragrafo.innerHTML = "Ikki é o Cavaleiro de Fênix, representando o signo de Escorpião. Ele é uma figura complexa, com uma personalidade solitária e intensa. Sua armadura de Fênix é ressurreta das cinzas, simbolizando sua capacidade de superar desafios. Ikki é um guerreiro formidável, capaz de infligir ferimentos ardentes aos seus adversários.";
        imagem.setAttribute("src","img/escorpiao.svg");
        imagem.setAttribute("width","300px");
    }
    
    else if(valor=="sagitario"){
        texto.innerHTML = "Cavaleiro de Sagitário (Aiolos)";
        paragrafo.innerHTML = "Aiolos é o Cavaleiro de Sagitário, representando o signo de Sagitário. Ele é lembrado como um herói lendário, cuja coragem e altruísmo inspiraram gerações futuras de Cavaleiros. Sua armadura de Sagitário simboliza a busca pela verdade e a aventura, características associadas ao signo de Sagitário.";
        imagem.setAttribute("src","img/sagitario.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="capricornio"){
        texto.innerHTML = "Cavaleiro de Dragão (Shiryu)";
        paragrafo.innerHTML = "Shiryu é o Cavaleiro de Dragão, representando o signo de Capricórnio. Ele é uma figura sábia e calma, possuindo uma grande força física e espiritual. Sua armadura de Dragão é resistente e durável, simbolizando sua determinação inabalável. Shiryu é conhecido por sua técnica Cólera do Dragão, uma manifestação impressionante de sua força interior.";
        imagem.setAttribute("src","img/capricornio.svg");
        imagem.setAttribute("width","300px");
    }

    else if(valor=="peixes"){
        texto.innerHTML = "Cavaleiro de Andrômeda (Shun)";
        paragrafo.innerHTML = "Shun é o Cavaleiro de Andrômeda, representando o signo de Peixes. Ele é uma alma sensível e compassiva, desafiando estereótipos de masculinidade com sua natureza gentil. Sua corrente de Andrômeda é versátil e eficaz em combate. Shun acredita no poder do amor e da amizade, sendo uma fonte constante de apoio emocional para seus companheiros.";
        imagem.setAttribute("src","img/peixes.svg");
        imagem.setAttribute("width","300px");
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}