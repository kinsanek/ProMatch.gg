let campeonatos = [];

function mostrarFormulario(){
    document.getElementById('formulario').style.display = 'block';
    const hoje = new Date().toISOString().split("T")[0];
    document.getElementById('dataInicio').setAttribute('min', hoje);
}

function fecharFormulario(){
    document.getElementById('formulario').style.display ='none';
}

function criarCampeonato(){
    const nome = document.getElementById('nome-campeonato').value;
    const modalidade = document.getElementById('modalidade').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const maxTimes = document.getElementById('maxTimes').value;

    if(!nome || !modalidade || !dataInicio || !horaInicio || !maxTimes){
        alert('Preencha todos os campos!');
        return;
    }

    const dataHoraSelecionada = new Date(`${dataInicio}T${horaInicio}`);
    const agora = new Date();

    if (dataHoraSelecionada < agora){
        alert('A data e o horário de início não podem ser no passado!');
        return;
    }

    const imagens = {
        "Valorant": "../img/valorant.png",
        "League of Legends": "../img/lol.webp",
        "Rainbow Six": "../img/r6.webp",
        "Counter-Strike": "../img/cs.jpg",
    };

    const imagemSrc = imagens[modalidade] || "default.jpg";

    document.getElementById('camp-mensagem').style.display = 'none';
    document.querySelector('.campeonatos').style.display = 'block';

    const campeonato = {
        nome, modalidade, dataHora: dataHoraSelecionada, maxTimes, imagemSrc
    };

    campeonatos.push(campeonato);
    fecharFormulario();
    atualizarCampeonatos();
}

function atualizarCampeonatos() {
    const container = document.getElementById('campeonatos');
    container.innerHTML = '';
    campeonatos.forEach(campeonato => {
        const campeonatoHTML = `
            <div class="campeonatos-card">
                <div class="foto-bg"><img class="foto-jogo" src="${campeonato.imagemSrc}" alt="${campeonato.modalidade}"></div>
                <h2>${campeonato.nome}</h2>
                <p>Modalidade: ${campeonato.modalidade}</p>
                <p>Início: ${campeonato.dataHora.toLocaleDateString()} às ${campeonato.dataHora.toLocaleTimeString()}</p>
                <p>Máximo de Times: ${campeonato.maxTimes} Times</p>
            </div>
        `;
        container.innerHTML += campeonatoHTML;
    });
}

function mostrarPopup(){
    document.getElementById('ordenar').style.display = 'block';;
}

function fecharPopup(){
    document.getElementById('ordenar').style.display ='none';
}

function ordenarCampeonatos(botao){
    const criterio = botao.dataset.criterio;

    if (criterio === 'data'){
        campeonatos.sort((a, b) => a.dataHora - b.dataHora);
    } else if (criterio === 'modalidade') {
        campeonatos.sort((a, b) => a.modalidade.localeCompare(b.modalidade));
    } else if (criterio === 'nome') {
        campeonatos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    atualizarCampeonatos();
    fecharPopup();
}