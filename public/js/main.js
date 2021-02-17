let boite = document.querySelectorAll('#oxo button')
let status = document.querySelector('#statutoxo')
let signe = ["X", "O"]
let joueur = signe[0]

function check() {
    if (boite[0].innerHTML == boite[1].innerHTML && boite[0].innerHTML == boite[2].innerHTML && boite[0].classList[0] == "rempli") {
        boite[0].style.backgroundColor = "#9ACD32";
        boite[1].style.backgroundColor = "#9ACD32";
        boite[2].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[3].innerHTML == boite[4].innerHTML && boite[3].innerHTML == boite[5].innerHTML && boite[3].classList[0] == "rempli") {
        boite[3].style.backgroundColor = "#9ACD32";
        boite[4].style.backgroundColor = "#9ACD32";
        boite[5].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[6].innerHTML == boite[7].innerHTML && boite[6].innerHTML == boite[8].innerHTML && boite[6].classList[0] == "rempli") {
        boite[6].style.backgroundColor = "#9ACD32";
        boite[7].style.backgroundColor = "#9ACD32";
        boite[8].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[0].innerHTML == boite[3].innerHTML && boite[0].innerHTML == boite[6].innerHTML && boite[0].classList[0] == "rempli") {
        boite[0].style.backgroundColor = "#9ACD32";
        boite[3].style.backgroundColor = "#9ACD32";
        boite[6].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[1].innerHTML == boite[4].innerHTML && boite[1].innerHTML == boite[7].innerHTML && boite[1].classList[0] == "rempli") {
        boite[1].style.backgroundColor = "#9ACD32";
        boite[4].style.backgroundColor = "#9ACD32";
        boite[7].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[2].innerHTML == boite[5].innerHTML && boite[2].innerHTML == boite[8].innerHTML && boite[2].classList[0] == "rempli") {
        boite[2].style.backgroundColor = "#9ACD32";
        boite[5].style.backgroundColor = "#9ACD32";
        boite[8].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[0].innerHTML == boite[4].innerHTML && boite[0].innerHTML == boite[8].innerHTML && boite[0].classList[0] == "rempli") {
        boite[0].style.backgroundColor = "#9ACD32";
        boite[4].style.backgroundColor = "#9ACD32";
        boite[8].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
    if (boite[2].innerHTML == boite[4].innerHTML && boite[2].innerHTML == boite[6].innerHTML && boite[2].classList[0] == "rempli") {
        boite[2].style.backgroundColor = "#9ACD32";
        boite[4].style.backgroundColor = "#9ACD32";
        boite[6].style.backgroundColor = "#9ACD32";
        status.innerHTML = `${joueur} à gagné`
    }
}

boite.forEach(el => {
    el.addEventListener('click', () => {
        if (joueur == signe[0]) {
            if (el.classList[0] == 'rempli') {
                status.innerHTML = "Case déjà remplie!"
            } else {
                el.innerHTML = signe[0]
                el.classList.add('rempli')
                joueur = signe[1]
            }
        } else if (joueur == signe[1]) {
            if (el.classList[0] == 'rempli') {
                status.innerHTML = "Case déjà remplie!"
            } else {
                el.innerHTML = signe[1]
                el.classList.add('rempli')
                joueur = signe[0]
            }
        }
        check()
    });
});

