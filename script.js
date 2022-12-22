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

    for (var i = 0; i < 9; i++) {
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
    location.href = "#cv";
});

button4.addEventListener("click", () => {
    location.href = "#contact";
});

/*********** about me image apparition *************/

// get all the images to show
const louannec = document.querySelector(".louannec");
const nets = document.querySelector(".nets");
const github_copilot = document.querySelector(".github_copilot");
const chat_gpt = document.querySelector(".chat_gpt");
const dall_e = document.querySelector(".dall_e");
const evangelion = document.querySelector(".evangelion");

// the image and legend to change 
const image = document.querySelector(".img_text");
const legend = document.querySelector(".to_type");

const letter_box = document.querySelector(".letter_box");

var finished = true;


louannec.addEventListener("mouseover", () => {

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);

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

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);


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

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);


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

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);


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

nets.addEventListener("mouseover", () => {

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);


    if (finished) {
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";

        setTimeout(() => {
            image.src = "images/nets.jpg";
            legend.innerHTML = "Nets";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            finished = true;
        }, 1000);
    }
});

evangelion.addEventListener("mouseover", () => {

    letter_box.style.animation = "disapparing 1s";
    setTimeout(() => {
        letter_box.style.display = "none";
    }, 1000);

    
    if (finished) {
        finished = false;
        image.style.animation = "disapparing 1s";
        legend.style.animation = "disapparing 1s";

        setTimeout(() => {
            image.src = "images/evangelion.jpg";
            legend.innerHTML = "Evangilon";
            legend.style.animation = "apparing 1s";
            image.style.animation = "apparing 1s";
            finished = true;
        }, 1000);
    }
});

/************** Waiting effect *****************/

const waiting = document.getElementsByClassName("letter_up");

function waiting_effect() {
    
    setTimeout(() => {
        waiting[0].style.animation = "up_to_down 1s";
    }, 200);
    setTimeout(() => {
        waiting[1].style.animation = "up_to_down 1s";
    }, 400);
    setTimeout(() => {
        waiting[2].style.animation = "up_to_down 1s";
    }, 600);
    setTimeout(() => {
        waiting[3].style.animation = "up_to_down 1s";
    }, 800);
    setTimeout(() => {
        waiting[4].style.animation = "up_to_down 1s";
    }, 1000);
    setTimeout(() => {
        waiting[5].style.animation = "up_to_down 1s";
    }, 1200);
    setTimeout(() => {
        waiting[6].style.animation = "up_to_down 1s";
    }, 1400);

    setTimeout(() => {
        for (let i = 0; i < waiting.length; i++) {
            waiting[i].style.animation = "";
        }
    }, 2400);
}

setInterval(waiting_effect, 2400);

/************** Slide project *****************/

/************** Slide to left 1 project *****************/

const sliding_left_1 = document.getElementsByClassName("slide_left");

window.addEventListener("scroll", () => {

    // distance from the top of the page to the top of the viewport and the height of the viewport
    const {scrollTop, clientHeight} = document.documentElement;

    // distance from the top of the page to the top of the element
    const topElementToTopviewport = sliding_left_1[0].getBoundingClientRect().top;

    // if the distance from the top of the page to the top of the element is less than the distance from the top 
    // of the page to the top of the viewport + the height of the viewport
    // the element animation is activated
    // toFixed() is used to round the number

    if (scrollTop > ( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80) {
        if (sliding_left_1[0].classList.contains("reverse_left")) {
            sliding_left_1[0].classList.remove("reverse_left");
        }
        sliding_left_1[0].classList.add("left_apparition");
    }

    // if we already scroll enough to activate the animation and we scroll back we remove the animation left_apparition and add the animation reverse_left
    if ( (sliding_left_1[0].classList.contains("left_apparition")) && (scrollTop < (( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80)) ) {
        sliding_left_1[0].classList.remove("left_apparition");
        sliding_left_1[0].classList.add("reverse_left");
    }

    if (scrollTop > ( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80) {
        if (sliding_left_1[0].classList.contains("reverse_left")) {
            sliding_left_1[0].classList.remove("reverse_left");
        }
        sliding_left_1[0].classList.add("left_apparition");
    }

    // if we already scroll enough to activate the animation and we scroll back we remove the animation left_apparition and add the animation reverse_left
    if ( (sliding_left_1[0].classList.contains("left_apparition")) && (scrollTop < (( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80)) ) {
        sliding_left_1[0].classList.remove("left_apparition");
        sliding_left_1[0].classList.add("reverse_left");
    }
});

/************** Slide to right 2 project *****************/

const sliding_right= document.querySelector(".slide_right");

window.addEventListener("scroll", () => {

    // distance from the top of the page to the top of the viewport and the height of the viewport
    const {scrollTop, clientHeight} = document.documentElement;

    // distance from the top of the page to the top of the element
    const topElementToTopviewport = sliding_right.getBoundingClientRect().top;

    // if the distance from the top of the page to the top of the element is less than the distance from the top 
    // of the page to the top of the viewport + the height of the viewport
    // the element animation is activated
    // toFixed() is used to round the number

    if (scrollTop > ( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80) {
        if (sliding_right.classList.contains("reverse_right")) {
            sliding_right.classList.remove("reverse_right");
        }
        sliding_right.classList.add("right_apparition");
    }

    // if we already scroll enough to activate the animation and we scroll back we remove the animation right_apparition and add the animation reverse_right
    if ( (sliding_right.classList.contains("right_apparition")) && (scrollTop < (( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80)) ) {
            sliding_right.classList.remove("right_apparition");
            sliding_right.classList.add("reverse_right");
    }
});

/************** Slide to left 3 project *****************/

const sliding_left_2 = document.getElementsByClassName("slide_left");

window.addEventListener("scroll", () => {

    // distance from the top of the page to the top of the viewport and the height of the viewport
    const {scrollTop, clientHeight} = document.documentElement;

    // distance from the top of the page to the top of the element
    const topElementToTopviewport = sliding_left_2[1].getBoundingClientRect().top;

    // if the distance from the top of the page to the top of the element is less than the distance from the top 
    // of the page to the top of the viewport + the height of the viewport
    // the element animation is activated
    // toFixed() is used to round the number

    if (scrollTop > ( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80) {
        if (sliding_left_2[1].classList.contains("reverse_left")) {
            sliding_left_2[1].classList.remove("reverse_left");
        }
        sliding_left_2[1].classList.add("left_apparition");
    }

    // if we already scroll enough to activate the animation and we scroll back we remove the animation left_apparition and add the animation reverse_left
    if ( (sliding_left_2[1].classList.contains("left_apparition")) && (scrollTop < (( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80)) ) {
        sliding_left_2[1].classList.remove("left_apparition");
        sliding_left_2[1].classList.add("reverse_left");
    }

    if (scrollTop > ( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80) {
        if (sliding_left_2[1].classList.contains("reverse_left")) {
            sliding_left_2[1].classList.remove("reverse_left");
        }
        sliding_left_2[1].classList.add("left_apparition");
    }

    // if we already scroll enough to activate the animation and we scroll back we remove the animation left_apparition and add the animation reverse_left
    if ( (sliding_left_2[1].classList.contains("left_apparition")) && (scrollTop < (( scrollTop + topElementToTopviewport).toFixed() - clientHeight * 0.80)) ) {
        sliding_left_2[1].classList.remove("left_apparition");
        sliding_left_2[1].classList.add("reverse_left");
    }
});

// For the future I would like to concatenate the 3 functions in 2 functions if i want to add more projects

/************** changing image project *****************/

const image_to_switch = document.querySelector(".carrousel_p1");

const image_project1 = ["images/evangelion.jpg", "images/nets.jpg", "images/chat_gpt.jpg", "images/europe.jpg", "images/profil_pic.jpeg"];
const btn_prev1 = document.querySelector(".prev1");
const btn_next1 = document.querySelector(".next1");
var iteration_img1 = 0;

btn_next1.addEventListener("click", () => {
    iteration_img1++;
    var index_img = image_project1[iteration_img1 % image_project1.length];

    setTimeout(() => {
        image_to_switch.src = index_img
    }, 500);
    
    switch (iteration_img1 % 4) {
        case 1:
            image_to_switch.style.animation = "translate-to-top 1s";
            break;
        case 2:
            image_to_switch.style.animation = "translate-to-right 1s";
            break;
        case 3:
            image_to_switch.style.animation = "translate-to-bottom 1s";
            break;
        case 0:
            image_to_switch.style.animation = "translate-to-left 1s";
            break;
    }
});

btn_prev1.addEventListener("click", () => {
    iteration_img1--;

    // if the iteration is negative we set it to the last index of the array
    if ( iteration_img1 < 0 )  {
        iteration_img1 = 3;
    }
    var index_img = image_project1[iteration_img1 % image_project1.length];

    setTimeout(() => {
        image_to_switch.src = index_img
    }, 500);

    switch (iteration_img1 % 4) {
        case 1:
            image_to_switch.style.animation = "translate-to-top 1s";
            break;
        case 2:
            image_to_switch.style.animation = "translate-to-right 1s";
            break;
        case 3:
            image_to_switch.style.animation = "translate-to-bottom 1s";
            break;
        case 0:
            image_to_switch.style.animation = "translate-to-left 1s";
            break;
    }
});


const image_project2 = ["images/evangelion.jpg", "images/nets.jpg", "images/chat_gpt.jpg", "images/dall_e.jpg", "images/github_copilot.png"];


/************** zoom image project *****************/

// img box, image and content of the project 1
const img_box_p1 = document.querySelector("#project1 > article.img_box");
const image_p1 = document.querySelector("#project1 > article > img");
const content_p1 = document.querySelector("#project1 > article.slide_left");
const btn_box_p1 = document.querySelector("#project1 > article > div.btn_box");


// img box, image and content of the project 2
const img_box_p2 = document.querySelector("#project2 > article.img_box");
const image_p2 = document.querySelector("#project2 > article > img");
const content_p2 = document.querySelector("#project2 > article.slide_right");
const btn_box_p2 = document.querySelector("#project2 > article > div.btn_box");


// img box, image and content of the project 3
const img_box_p3 = document.querySelector("#project3 > article.img_box");
const image_p3 = document.querySelector("#project3 > article > img");
const content_p3 = document.querySelector("#project3 > article.slide_left");
const btn_box_p3 = document.querySelector("#project3 > article > div.btn_box");

image_p1.addEventListener("click", () => change_size_image(img_box_p1, image_p1, content_p1, btn_box_p1));
image_p2.addEventListener("click", () => change_size_image(img_box_p2, image_p2, content_p2, btn_box_p2));
//image_p3.addEventListener("click", () => change_size_image(img_box_p3, image_p3, content_p3, btn_box_p3));

var full_size = false;
var temp_full_size = false;

function change_size_image(img_box, image, content, btn_box){

    if ( full_size == false ) {

        // for later : change the animation, more smooth 
        content.style.display = "none";

        img_box.style.transition = "width 2s, height 2s";
        img_box.style.width = "95%";
        img_box.style.height = "95vh";

        image.style.transition = "width 2s, height 2s";
        image.style.width = "90%";
        image.style.height = "85vh";

        btn_box.style.transition = "top 2s";
        btn_box.style.top = "92%";

        // here i use a temporary variable to avoid the 2nd part of the function to be called again
        temp_full_size = true
    } 

    if ( full_size == true) {

        content.style.display = "block"
            
        img_box.style.transition = "width 2s, height 2s";
        img_box.style.width = "500px";
        img_box.style.height = "600px";

        image.style.transition = "width 2s, height 2s";
        image.style.width = "90%";
        image.style.height = "80%"; 
            
        btn_box.style.transition = "top 2s";
        btn_box.style.top = "85%";

        full_size = false
    }

    full_size = temp_full_size

    // reset the temporary variable
    temp_full_size = false

}
