function scrollToSection(botao){
    const criterio = botao.dataset.criterio;

    if (criterio === 'desenvolvedores'){
        document.getElementById("desenvolvedores").scrollIntoView({ behavior: "smooth"});
    } else if (criterio === 'valorant'){
        document.getElementById("valorant").scrollIntoView({ behavior: "smooth"});
    } else if (criterio === 'lol'){
        document.getElementById("lol").scrollIntoView({ behavior: "smooth"});
    } else if (criterio === 'r6'){
        document.getElementById("r6").scrollIntoView({ behavior: "smooth"});
    } else if (criterio === 'cs'){
        document.getElementById("cs").scrollIntoView({ behavior: "smooth"});
    } else{

    }
}