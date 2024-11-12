let tableau = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]


let gifInarius = document.querySelector(".gif-inarius");
let photoInarius = document.querySelector(".photo-inarius");
let gifLilith = document.querySelector(".gif-lilith");
let photoLilith = document.querySelector(".photo-lilith");
let joueur = 1;
let pion = "";
let music  = new Audio('./assets/images/musique-fond.mp3');
music.loop = true;

function affichertableau() {
    let divtableau = document.querySelector("#tableau3x3");
    divtableau.innerHTML = "";

    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length; j++) {
            let cellules = document.createElement('div')
            cellules.classList.add('cellules')
            let image = document.createElement('img')

            if (tableau[i][j] == 'x') {
                  image.src = './assets/images/symbole-d4.jpg'
                  cellules.classList.add("disabled")
            }else if (tableau[i][j] == 'o'){
                image.src = './assets/images/inarius-insignia.webp'
                cellules.classList.add("disabled")
            }
            

            cellules.appendChild(image)
            divtableau.appendChild(cellules);
            cellules.addEventListener('click', function () {
            tableau[i][j] = jvj();
            cellules.textContent;
            affichertableau(tableau)
            })
            gifinarius()
            playmusic()
           
        }
    }
}

affichertableau()

function jvj() {
    
    if (joueur===1) {
      joueur=2
      pion = 'o'  
    }
    else if (joueur===2) {
        joueur=1
        pion = "x"
    }
    return pion
}

function  gifinarius() {
    if (pion === "x") {
        photoInarius.classList.add("hidden")
        photoLilith.classList.remove("hidden")
    }
    else if (pion === "o"){
        photoLilith.classList.add("hidden")
        photoInarius.classList.remove("hidden")
    }

}

function playmusic() {
    music.play();
}


function conditionvictoire() {
    
}

