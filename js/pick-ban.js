//BANS VALORANT

const team1 = "Alfa";
const team2= "Bravo";
let turn = team1;

let mapPool = ["Abyss", "Bind", "Fracture", "Lotus", "Haven", "Pearl", "Split"];

const turnText = document.querySelector("#turnText");

turnText.innerText = `É a vez da equipe ${turn} Banir o Mapa`;

const maps = document.querySelectorAll(".card");

function chooseMap(event){
    if (turn == team1){
        turn = team2
    } else {
        turn = team1
    }

    turnText.innerText = `É a vez da equipe ${turn} Banir o mapa`;

    event.currentTarget.classList.add("selected");

    event.currentTarget.removeEventListener("click",chooseMap);

    event.currentTarget.querySelector(".accept h2").innerText = "BANIDO";

    const clickedMap = event.currentTarget.querySelector(".mapname").innerText;

    mapPool = mapPool.filter(map => map != clickedMap);

    if (mapPool.length==1){
        const decidedMap = document.querySelector(".card:not(.selected)");
        decidedMap.classList.add("picked");
        decidedMap.removeEventListener("click",chooseMap);
        decidedMap.classList.add("disable-hover");
        turnText.innerText=`O mapa da partida será ${mapPool[0]}`;
    }
}

for (let index = 0; index < maps.length; index++){
    maps[index].addEventListener("click", chooseMap);
}

// BANS CS

const team3 = "Charlie";
const team4= "Delta";
let turn_cs = team3;

let mapPool_cs = ["Mirage", "Dust 2", "Inferno", "Anubis", "Ancient", "Nuke", "Train"];

const turnTextCS = document.querySelector("#turnText-cs");

turnTextCS.innerText = `É a vez da equipe ${turn_cs} Banir o Mapa`;

const maps_cs = document.querySelectorAll(".card-cs");

function chooseMap_cs(event){
    if (turn_cs == team3){
        turn_cs = team4
    } else {
        turn_cs = team3
    }

    turnTextCS.innerText = `É a vez da equipe ${turn_cs} Banir o mapa`;

    event.currentTarget.classList.add("selected");

    event.currentTarget.removeEventListener("click",chooseMap_cs);

    event.currentTarget.querySelector(".accept h2").innerText = "BANIDO";

    const clickedMap_cs = event.currentTarget.querySelector(".mapname-cs").innerText;

    mapPool_cs = mapPool_cs.filter(map => map != clickedMap_cs);

    if (mapPool_cs.length==1){
        const decidedMapCS = document.querySelector(".card-cs:not(.selected)");
        decidedMapCS.classList.add("picked");
        decidedMapCS.removeEventListener("click",chooseMap_cs);
        decidedMapCS.classList.add("disable-hover");
        turnTextCS.innerText=`O mapa da partida será ${mapPool_cs[0]}`;
    }
}

for (let index_cs = 0; index_cs < maps_cs.length; index_cs++){
    maps_cs[index_cs].addEventListener("click", chooseMap_cs);
}

//BANS RAINBOW SIX

const team5 = "Echo";
const team6= "Foxtrot";
let turn_r6 = team5;

let mapPool_r6 = ["Arranha-Céu", "Banco", "Café Dostoievski", "Chalé", "Clube", "Consulado", "Fronteira"];

const turnTextR6 = document.querySelector("#turnText-r6");

turnTextR6.innerText = `É a vez da equipe ${turn_r6} Banir o Mapa`;

const maps_r6 = document.querySelectorAll(".card-r6");

function chooseMap_r6(event){
    if (turn_r6 == team5){
        turn_r6 = team6
    } else {
        turn_r6 = team5
    }

    turnTextR6.innerText = `É a vez da equipe ${turn_r6} Banir o mapa`;

    event.currentTarget.classList.add("selected");

    event.currentTarget.removeEventListener("click",chooseMap_r6);

    event.currentTarget.querySelector(".accept h2").innerText = "BANIDO";

    const clickedMap_r6 = event.currentTarget.querySelector(".mapname-r6").innerText;

    mapPool_r6 = mapPool_r6.filter(map => map != clickedMap_r6);

    if (mapPool_r6.length==1){
        const decidedMapR6 = document.querySelector(".card-r6:not(.selected)");
        decidedMapR6.classList.add("picked");
        decidedMapR6.removeEventListener("click",chooseMap_cs);
        decidedMapR6.classList.add("disable-hover");
        turnTextR6.innerText=`O mapa da partida será ${mapPool_r6[0]}`;
    }
}

for (let index_r6 = 0; index_r6 < maps_r6.length; index_r6++){
    maps_r6[index_r6].addEventListener("click", chooseMap_r6);
}

// BANS LOL
const team7 = "Aronguejo";
const team8= "Grompe";
let turn_lol = team7;

let champions = ["Aatrox", "Ahri", "Akshan", "Aphelios", "Amumu", "Bel'veth", "Brand", "Caitlyn", "Cho'gath", "Darius", "Draven", "Ekko", "Ezreal", "Fiddlesticks","Garen", "Gragas", "Heimerdinger", "Irelia", "Jax", "Jayce", "Jinx","Karthus", "Katarina", "Kayle", "Kayn", "Lee Sin", "Lulu", "Lux","Malphite", "Master Yi", "Mordekaiser", "Morgana", "Neeko", "Nunu", "Olaf", "Sylas", "Viego"];
const turnTextLol = document.querySelector("#turnTextLol");

turnTextLol.innerText = `É a vez da equipe ${turn_lol} Banir o Campeão`;

const campeoes = document.querySelectorAll(".nome");

function chooseMap_lol(event){
    if (turn_lol == team7){
        turn_lol = team8
    } else {
        turn_lol = team7
    }

    turnTextLol.innerText = `É a vez da equipe ${turn_lol} Banir o Campeão`;

    event.currentTarget.classList.add("selected");

    event.currentTarget.removeEventListener("click",chooseMap_lol);

    event.currentTarget.querySelector(".accept h2").innerText = "BANIDO";

    const clickedMap_lol = event.currentTarget.querySelector(".nome-campeao").innerText;

    champions = champions.filter(champ => champ != clickedMap_lol);

    if (champions.length < 28) {
        let freeChampions = document.querySelectorAll(".nome:not(.selected)");
        freeChampions.forEach(freeChampion => {
            freeChampion.classList.add("picked");
            freeChampion.removeEventListener("click", chooseMap_lol);
            freeChampion.classList.add("disable-hover");
        });
        turnTextLol.innerText = `Fase de banimentos concluida!`;
    }
}

campeoes.forEach(campeao => {
    campeao.addEventListener("click", chooseMap_lol);
});

//Ordenar Campeoes


document.addEventListener("DOMContentLoaded", function () {
    let campeoesContainer = document.querySelector(".campeoes"); 
    let campeoes = Array.from(campeoesContainer.children);

   
    campeoes.sort((a, b) => {
        let nomeA = a.querySelector("p").textContent.toLowerCase();
        let nomeB = b.querySelector("p").textContent.toLowerCase();
        return nomeA.localeCompare(nomeB);
    });

    campeoes.forEach(campeao => campeoesContainer.appendChild(campeao));
});