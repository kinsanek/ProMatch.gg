let campeonatos = [];
let indexEditar = null;

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
        "Valorant": "img/valorant.png",
        "League of Legends": "img/lol.webp",
        "Rainbow Six": "img/r6.webp",
        "Counter-Strike": "img/cs.jpg",
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
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
}

window.onload = () => {
    const dadosSalvos = localStorage.getItem('campeonatos');
    if (dadosSalvos) {
        campeonatos = JSON.parse(dadosSalvos);

        // Converter a string da data de volta para objeto Date
        campeonatos.forEach(c => c.dataHora = new Date(c.dataHora));
        
        document.getElementById('camp-mensagem').style.display = 'none';
        document.querySelector('.campeonatos').style.display = 'block';
        atualizarCampeonatos();
    }
};

function atualizarCampeonatos() {
    const container = document.getElementById('campeonatos');
    container.innerHTML = '';
    campeonatos.forEach((campeonato, index) => {
        const campeonatoHTML = `
            <div class="campeonatos-card">
                <div class="foto-bg"><img class="foto-jogo" src="${campeonato.imagemSrc}" alt="${campeonato.modalidade}"></div>
                <h2>${campeonato.nome}</h2>
                <p>Modalidade: ${campeonato.modalidade}</p>
                <p>Início: ${campeonato.dataHora.toLocaleDateString()} às ${campeonato.dataHora.toLocaleTimeString()}</p>
                <p>Máximo de Times: ${campeonato.maxTimes} Times</p>
                <div class="popup-buttons">
                    <button class='popup-btn edit' onclick='editarCampeonato(${index})'>Editar</button>
                    <button class='popup-btn cancel edit-cancel'onclick='excluirCampeonato(${index})'>Excluir</button>
                </div>
            </div>
        `;
        container.innerHTML += campeonatoHTML;
    });
}

function excluirCampeonato(index) {
  if (confirm("Tem certeza que deseja excluir este campeonato?")) {
    campeonatos.splice(index, 1); // remove do array
    localStorage.setItem('campeonatos', JSON.stringify(campeonatos)); // atualiza o armazenamento
    atualizarCampeonatos(); // atualiza a interface
  }
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


function editarCampeonato(index) {
    indiceEditar = index;
    const campeonato = campeonatos[index];
    
    document.getElementById('nome-campeonato-editar').value = campeonato.nome;
    document.getElementById('modalidade-editar').value = campeonato.modalidade;
    document.getElementById('dataInicio-editar').value = campeonato.dataHora.toISOString().split('T')[0];
    document.getElementById('horaInicio-editar').value = campeonato.dataHora.toTimeString().split(' ')[0].slice(0,5);
    document.getElementById('maxTimes-editar').value = campeonato.maxTimes;
    
    document.getElementById('formulario-editar').style.display = 'block';
}

function fecharFormularioEditar() {
    document.getElementById('formulario-editar').style.display = 'none';
    indiceEditar = null;
}

function salvarEdicao() {
    const nome = document.getElementById('nome-campeonato-editar').value;
    const modalidade = document.getElementById('modalidade-editar').value;
    const dataInicio = document.getElementById('dataInicio-editar').value;
    const horaInicio = document.getElementById('horaInicio-editar').value;
    const maxTimes = document.getElementById('maxTimes-editar').value;

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
        "Valorant": "img/valorant.png",
        "League of Legends": "img/lol.webp",
        "Rainbow Six": "img/r6.webp",
        "Counter-Strike": "img/cs.jpg",
    };

    const imagemSrc = imagens[modalidade] || "default.jpg";

    // Atualiza o campeonato editado
    campeonatos[indiceEditar] = {
        nome,
        modalidade,
        dataHora: dataHoraSelecionada,
        maxTimes,
        imagemSrc
    };

    localStorage.setItem('campeonatos', JSON.stringify(campeonatos));
    atualizarCampeonatos();
    fecharFormularioEditar();
}
