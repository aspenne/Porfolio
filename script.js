

/* Don't no why but the web page is crashing
tab_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
                     "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
                     "!", "@", "#", "$", "%", "&", "?"];

tab_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const matrice = document.querySelector(".matrice");


for (var i = 0; i < 40; i++) {
    const letter = document.createElement("div");
    letter.innerHTML = "a";

    matrice.appendChild(letter);

    function change_char(){
        const x = parseInt(`${Math.floor(Math.random() * tab_letters.length)}`);
        letter.innerHTML = tab_letters[x];
    }

    setInterval(change_char, 100);
}

function matrixEffect() {

    random_nb = Math.floor(Math.random() * 9) + 1; 

    while(tab_left.includes(random_nb)){
        random_nb = Math.floor(Math.random() * 9) + 1;
    }

    tab_left.push(random_nb);


    const matrix = document.createElement("div");
    matrix.classList.add("matrice");

    matrix.style.left = random_nb * 10 + "%";

    setInterval(() => {
        matrix.innerHTML = matrice.innerHTML;
    }, 100);

    document.querySelector("body").insertBefore(matrix, matrice);

}

function destroyMatrice() {
    const matrice = document.querySelectorAll(".matrice");
    for (var i = 1; i < matrice.length; i++) {
        matrice[i].remove();
    }
}   

tab_left = [];

setInterval(matrixEffect, 800);

setInterval(destroyMatrice, 800*9);

*/