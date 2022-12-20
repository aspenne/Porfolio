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


/***** Typed *********/

const typed = new Typed(".typed", {
    strings: ["I'm Developper", "I love anime", "I love anime / manga", " I love anime / manga particulary evangilon", " I like to code", 
              "I like winter",  "I like winter, snow", "I like winter, snow, skiing", "I like winter, snow, skiing, landscapes "],
    typeSpeed: 100,
    startDelay: 200,
    backSpeed: 100,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "_",
    contentType: "html",
});

/***** Invisible block apparition *********/

const card = document.querySelector(".card");
const invisible = document.querySelector(".invisible");

card.addEventListener("mouseover", () => {
    invisible.style.display = "block";
    invisible.style.animation = "show 2s";
});

card.addEventListener("mouseout", () => {
    invisible.style.display = "none";
});

/***** White point *********/

// width and height of the window
var window_width = window.innerWidth;
var window_height = window.innerHeight;

function white() {

    // width and height of the point
    const width = parseInt(`${Math.floor(Math.random() * 30)}`);

    // position x and y of the point
    const x = parseInt(`${Math.floor(Math.random() * window_width) - 50}`);
    const y = parseInt(`${Math.floor(Math.random() * window_height) - 50}`);

    const white = document.createElement("div");
    
    white.classList.add("white");
    white.style.width = width + "px";
    white.style.height = width + "px";
    white.style.borderRadius = "50%";
    white.style.left = x + "px";
    white.style.top = y + "px";
    

    document.querySelector(".white_point").appendChild(white);

}

function deleteWhite() {
    const white = document.querySelectorAll(".white");

    for (var i = 1; i < 10; i++) {
        white[i].remove();
    }
    console.log("cleanning");
}

// create 10 points every second
setInterval(white, 100);

// wait 2 seconds and delete 10 points every second after
setTimeout(() => {
    setInterval(deleteWhite, 1000);
}, 2000);
