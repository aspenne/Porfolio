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
    cursorChar: "|",
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

    for (var i = 0; i < 10; i++) {
        white[i].remove();
    }
}

// create 10 points every second
setInterval(white, 100);

// wait 2 seconds and delete 10 points every second after
setTimeout(() => {
    setInterval(deleteWhite, 1000);
}, 2000);

/****** button link ******/

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

button1.addEventListener("click", () => {
    location.href = "#about";
});

button2.addEventListener("click", () => {
    location.href = "#projects";
});

button3.addEventListener("click", () => {
    location.href = "#contact";
});

button4.addEventListener("click", () => {
    location.href = "#contact";
});

/*********** about me image apparition *************/

// get all the images to show
const louannec = document.querySelector(".louannec");
const computer_science = document.querySelector(".computer_science");
const github_copilot = document.querySelector(".github_copilot");
const chat_gpt = document.querySelector(".chat_gpt");
const dall_e = document.querySelector(".dall_e");

// the image and legend to change 
const image = document.querySelector(".img_text");
const legend = document.querySelector(".to_type");

var finished = true;


louannec.addEventListener("mouseover", () => {
    if (finished){
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";

        setTimeout(() => {
            image.src = "images/europe.jpg";
            legend.innerHTML = "Europe";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            setTimeout(() => {
                image.style.animation = "disapparing 1s";
                legend.style.animation = "disapparing 1s";
            }, 1000);
            setTimeout(() => {
                image.style.animation = "apparing 1s";
                legend.style.animation = "apparing 1s";
                image.src = "images/brittany.jpg";
                legend.innerHTML = "Brittany";
            }, 2000);
            setTimeout(() => {
                image.style.animation = "disapparing 1s";
                legend.style.animation = "disapparing 1s";
            }, 3000);
            setTimeout(() => {
                image.style.animation = "apparing 1s";
                legend.style.animation = "apparing 1s";
                image.src = "images/louannec.jpg";
                legend.innerHTML = "Louannec";
            }, 4000);
            setTimeout(() => {
                finished = true;
            }, 5000);
        }, 1000);
    }
});

github_copilot.addEventListener("mouseover", () => {
    if (finished){
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";
    
        setTimeout(() => {
            image.src = "images/github_copilot.png";
            legend.innerHTML = "Github Copilot";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            finished = true;
        }, 1000);
    }
});

chat_gpt.addEventListener("mouseover", () => {
    if (finished) {
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";

        setTimeout(() => {
            image.src = "images/chat_gpt.jpg";
            legend.innerHTML = "Open IA / Chat GPT";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            finished = true;
        }, 1000);
    }
});

dall_e.addEventListener("mouseover", () => {
    if (finished) {
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";

        setTimeout(() => {
            image.src = "images/dall_e.jpg";
            legend.innerHTML = "Open IA / Dall-E";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            finished = true;
        }, 1000);
    }
});

