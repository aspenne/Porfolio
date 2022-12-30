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

function white() {

    // width and height of the header
    var header_width = document.getElementsByTagName("header")[0].clientWidth;
    var header_height = document.getElementsByTagName("header")[0].clientHeight;

    // width and height of the point
    const width = parseInt(`${Math.floor(Math.random() * 30)}`);

    // position x and y of the point
    const x = parseInt(`${Math.floor(Math.random() * header_width) - 50}`);
    const y = parseInt(`${Math.floor(Math.random() * header_height) - 50}`);

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

    if (!(document.querySelector('.white_point').childNodes.length <= 20)) {
        for (var i = 0; i < 10; i++) {
            white[i].remove();
        }
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
});

// For the future I would like to concatenate the 3 functions in 2 functions if i want to add more projects

/************** changing image project *****************/

let iteration_img1 = 0;
let iteration_img2 = 0;
let iteration_img3 = 0;

const image_to_switch1 = document.querySelector(".carrousel_p1");
const image_to_switch2 = document.querySelector(".carrousel_p2");
const image_to_switch3 = document.querySelector(".carrousel_p3");

const image_project1 = ["images/Regalouzz/index.png", "images/Regalouzz/shop.png", "images/Regalouzz/database.png", "images/Regalouzz/pgsql.png",
                        "images/Regalouzz/pdo.png", "images/Regalouzz/apache_postgresql.png", "images/Regalouzz/nihost.png"];
const image_project2 = ["images/Senpa/senpa.png", "images/Senpa/documentation.png", "images/Senpa/unban.png", "images/Senpa/kick.png", "images/Senpa/rankboard.png", 
                        "images/Senpa/ban_list_cmd.png", "images/Senpa/info_serv_cmd.png", "images/Senpa/roll_cmd.png", "images/Senpa/rankboard_cmd.png", ];
const image_project3 = ["images/Portfolio/css1.png", "images/Portfolio/email_js_code.png", "images/Portfolio/email_js_console.png", "images/Portfolio/header.png", 
                        "images/Portfolio/header_btn.png", "images/Portfolio/white.png"];

const btn_next1 = document.querySelector(".next1");
const btn_prev1 = document.querySelector(".prev1");

btn_next1.addEventListener("click", () => nextImage(iteration_img1, image_project1, image_to_switch1, 1));
btn_prev1.addEventListener("click", () => PreviousImage(iteration_img1, image_project1, image_to_switch1, 1));

const btn_next2 = document.querySelector(".next2");
const btn_prev2 = document.querySelector(".prev2");

btn_next2.addEventListener("click", () => nextImage(iteration_img2, image_project2, image_to_switch2, 2));
btn_prev2.addEventListener("click", () => PreviousImage(iteration_img2, image_project2, image_to_switch2, 2));

const btn_next3 = document.querySelector(".next3");
const btn_prev3 = document.querySelector(".prev3");

btn_next3.addEventListener("click", () => nextImage(iteration_img3, image_project3, image_to_switch3, 3));
btn_prev3.addEventListener("click", () => PreviousImage(iteration_img3, image_project3, image_to_switch3, 3));


function nextImage(iteration_img, img_project, image_to_switch){

    switch ( arguments[3] ) {
        case 1:
            iteration_img1++;
            iteration_img++;
            break;
        case 2:
            iteration_img2++;
            iteration_img++;
            break;
        case 3:
            iteration_img3++;
            iteration_img++;
            break;
    }

    var index_img = img_project[iteration_img % img_project.length];

    setTimeout(() => {
        image_to_switch.src = index_img
    }, 500);
    
    switch (iteration_img % 4) {
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
}

function PreviousImage(iteration_img, img_project, image_to_switch){
    switch ( arguments[3]) {
        case 1:
            iteration_img1--;
            iteration_img--;
            break;
        case 2:
            iteration_img2--;
            iteration_img--;
            break;
        case 3:
            iteration_img3--;
            iteration_img--;
            break;
    }

    // if the iteration is negative we set it to the last index of the array
    if ( iteration_img < 0 )  {

    switch ( arguments[3]) {
        case 1:
            iteration_img1 = 3;
            iteration_img = 3;
            break;
        case 2:
            iteration_img2 = 3;
            iteration_img = 3;
            break;
        case 3:
            iteration_img3 = 3;
            iteration_img = 3;
            break;
        }
    }

    console.log(iteration_img);

    var index_img = img_project[iteration_img % img_project.length];

    setTimeout(() => {
        image_to_switch.src = index_img
    }, 500);

    switch (iteration_img % 4) {
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
}

/************** zoom image project *****************/

// img box, image and content of the project 1
const img_box_p1 = document.querySelector("#project1 > article.img_box");
const image_p1 = document.querySelector("#project1 > article > img");
const content_p1 = document.querySelector("#project1 > section.slide_left");
const btn_box_p1 = document.querySelector("#project1 > article > div.btn_box");


// img box, image and content of the project 2
const img_box_p2 = document.querySelector("#project2 > article.img_box");
const image_p2 = document.querySelector("#project2 > article > img");
const content_p2 = document.querySelector("#project2 > section.slide_right");
const btn_box_p2 = document.querySelector("#project2 > article > div.btn_box");


// img box, image and content of the project 3
const img_box_p3 = document.querySelector("#project3 > article.img_box");
const image_p3 = document.querySelector("#project3 > article > img");
const content_p3 = document.querySelector("#project3 > section.slide_left");
const btn_box_p3 = document.querySelector("#project3 > article > div.btn_box");

image_p1.addEventListener("click", () => change_size_image(img_box_p1, image_p1, content_p1, btn_box_p1));
image_p2.addEventListener("click", () => change_size_image(img_box_p2, image_p2, content_p2, btn_box_p2));
image_p3.addEventListener("click", () => change_size_image(img_box_p3, image_p3, content_p3, btn_box_p3));

var full_size = false;
var temp_full_size = false;

function change_size_image(img_box, image, content, btn_box){

    if ( full_size == false ) {

        image.classList.add("none");

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

        image.classList.remove("none");

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


/************** appartition list in cv part *****************/

var last_liste_temp;

function change_cv_color(article) {
    const className = article.className;
    const img = document.querySelector('.cv_image');
    const liste = article.lastElementChild;

    // for the list 
    if (last_liste_temp != undefined) {
        if (last_liste_temp.style.animation == ('1s ease 0s 1 normal none running close-show')) {
            last_liste_temp.style.animation = ('');
            // i just need to wait a little bit to have the animation
            setTimeout(() => {
                last_liste_temp.style.animation = '1s close-show ease';
            }, 0001);

            setTimeout(() => {
                last_liste_temp.style.borderColor = '#fff';
            }, 500);
        }
    }

    setTimeout(() => {
        last_liste_temp = liste;
    }, 500);

    if (liste.style.animation == ('1s ease 0s 1 normal none running close-show')) {
        liste.style.animation = ('');
    }
    
    setTimeout(() => {
        liste.style.animation = '1s close-show ease';
    }, 0001);

    // for the image

    if (img.style.animation == ('1s ease 0s 1 normal none running close-show')) {
        img.style.animation = ('');
    }
    // i just need to wait a little bit to have the animation
    setTimeout(() => {
        img.style.animation = '1s close-show ease';
    }, 0001);

    // for the image and the list

    setTimeout(() => {

    switch (className) {
        case 'cv_about':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_About.jpg';
            break;
        case 'cv_skills':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Skills.jpg';
            break;
        case 'cv_training':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Training.jpg';
            break;
        case 'cv_projects':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Projects.jpg';
            break;
        case 'cv_work':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Work.jpg';
            break;
        case 'cv_contact':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Contact.jpg';
            break;
        case 'cv_interests':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Personnal_interests.jpg';
            break;
        case 'cv_soft':
            img.src = 'images/CV/MICHELO_AXEL_CV_ANGLAIS_Soft.jpg';
            break;
        case 'cv_language':
            img.src = 'images/CV/MICHELO_AXEL_CV_Anglais_Language.jpg';
            break;
    }

    liste.style.borderColor = 'red';

    }, 500);
    
        
};

/************** name validation *****************/

var name_input = document.querySelector('#name');
var span_name = document.querySelector('#name + span');

name_input.addEventListener("focus", () => focusInput(name_input, span_name));

name_input.addEventListener("input", () => emptyInput(name_input, span_name));

name_input.addEventListener("blur", () => emptyBlur(name_input, span_name));

/************** Lastname validation *****************/

var lastname = document.querySelector('#lastname');
var span_lastname = document.querySelector('#lastname + span');

lastname.addEventListener("focus", () => focusInput(lastname, span_lastname));

lastname.addEventListener("input", () => emptyInput(lastname, span_lastname));

lastname.addEventListener("blur", () => emptyBlur(lastname, span_lastname));



/************** function validation *****************/

function focusInput(input, span) {
    if ( input.value.length == 0){
        input.style.borderColor = '#fff';
        span.style.borderColor = '#fff';
        span.style.color = '#fff';
    }
}
function emptyInput(input, span) {
    if (input.value.length <= 2) {
        input.style.borderColor = 'red';
        span.style.borderColor = 'red';
        span.style.color = 'red';
    }
    else {
        input.style.borderColor = 'green';
        span.style.borderColor = 'green';
        span.style.color = 'green';
    }
};

function emptyBlur(input, span) {
    if (input.value == "") {
        input.style.borderColor = 'rgba(255, 255, 255, 0.250)';
        span.style.borderColor = 'rgba(255, 255, 255, 0.250)';
        span.style.color = 'rgba(255, 255, 255, 0.250)';
    }
    else if (input.value.length <= 2) {
        input.style.borderColor = 'red';
        span.style.borderColor = 'red';
        span.style.color = 'red';
    }
    else {
        input.style.borderColor = 'green';
        span.style.borderColor = 'green';
        span.style.color = 'green';
    }
};


/************** mail validation *****************/

var mail = document.querySelector('#mail');
var span_mail = document.querySelector('#mail + span');

mail.addEventListener("focus", () => focusInput(mail, span_mail));

mail.addEventListener("input", validateMailInput);

mail.addEventListener("blur", validateMailBlur);

function validateMailBlur() {
    var mail_value = mail.value;
    var mail_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mail_valid = mail_regex.test(mail_value);
    if (mail_value == "") {
        mail.style.borderColor = 'rgba(255, 255, 255, 0.250)';
        span_mail.style.borderColor = 'rgba(255, 255, 255, 0.250)';
        span_mail.style.color = 'rgba(255, 255, 255, 0.250)';
    }
    if (mail_valid == false && mail_value.length > 0) {
        mail.style.borderColor = 'red';
        span_mail.style.borderColor = 'red';
        span_mail.style.color = 'red';
    }
    if (mail_valid != false && mail_value != '') {
        mail.style.borderColor = 'green';
        span_mail.style.borderColor = 'green';
        span_mail.style.color = 'green';
    }
}

// the user is not forced to wait for the blur event to validate the mail
function validateMailInput() {
    var mail_value = document.querySelector('#mail').value;
    var mail_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mail_valid = mail_regex.test(mail_value);
    if (mail_valid != false) {
        mail.style.borderColor = 'green';
        span_mail.style.borderColor = 'green';
        span_mail.style.color = 'green';
    }
    if ( mail_valid == false) {
        mail.style.borderColor = 'red';
        span_mail.style.borderColor = 'red';
        span_mail.style.color = 'red';
    }
}

/************** message validation *****************/

var message = document.querySelector('#message');

message.addEventListener("focus", () => {
    if (message.value.length == 0){
        message.style.borderColor = '#fff';
    }
});

message.addEventListener("input", () => {
    if (message.value.length <= 2) {
        message.style.borderColor = 'red';
    }
    else {
        message.style.borderColor = 'green';
    }
});

message.addEventListener("blur", () => {
    if (message.value.length <= 2) {
        message.style.borderColor = 'red';
    }
    if (message.value.length == 0) {
        message.style.borderColor = 'rgba(255, 255, 255, 0.250)';
    }
    else {
        message.style.borderColor = 'green';
    }
});

/************** Contact form validation *****************/

var submit_button = document.getElementById("submit");
var alert_message = document.getElementById("alert_message");
// serve when the user click on the submit button to not change the color of each element
var temp = false;
var helping_message = "all the fields must be filled  !"

function valid_button(){
    if (temp == false){
        if (name_input.style.borderColor == 'green' && lastname.style.borderColor == 'green' && span_mail.style.color == 'green' && message.style.borderColor == 'green') {
            submit_button.style.borderColor = 'green';
            submit_button.style.color = 'green';
            alert_message.style.color = 'green';
            if (alert_message.innerHTML == helping_message) {
                alert_message.classList.add('d-none');
                setTimeout(() =>{
                    alert_message.innerHTML = '';
                    alert_message.classList.remove('d-none');
                }, 1000);

            }
        }
        else {
            submit_button.style.borderColor = 'red';
            submit_button.style.color = 'red';
            alert_message.style.color = 'red';
        }
    }
}

setInterval(valid_button, 100);


/************** Contact form *****************/



function sendMail(){


    if (submit_button.style.borderColor == 'green' && submit_button.style.color == 'green') {

        temp = true;

        alert_message.style.color = 'green';

        setTimeout(() => {
            alert_message.innerHTML = 'Your message has been sent to axel !';
        }, 500);

        setTimeout(() => {
            alert_message.classList.add('d-none');
        }, 1500);

        setTimeout(() => {
            alert_message.classList.remove('d-none');
            alert_message.textContent = '';
            name_input.value = '';
                name_input.style.borderColor = '#fff';
                span_name.style.borderColor = '#fff';
                span_name.style.color = '#fff';
            lastname.value = '';
                lastname.style.borderColor = '#fff';
                span_lastname.style.borderColor = '#fff';
                span_lastname.style.color = '#fff';
            mail.value = '';
                mail.style.borderColor = '#fff';
                span_mail.style.borderColor = '#fff';
                span_mail.style.color = '#fff';
            message.value = '';
                message.style.borderColor = '#fff';
            temp = false;
        }, 2500);
        

        var params = {
            name : document.querySelector('#name').value,
            lastname : document.querySelector('#lastname').value,
            mail : document.querySelector('#mail').value,
            message : document.querySelector('#message').value
        };
        const serviceID = 'service_u6pev8m';
        const templateID = 'template_1qgda2m';

        emailjs.send(serviceID, templateID, params).then((res) => {
            document.querySelector('#name').value = '';
            document.querySelector('#lastname').value = '';
            document.querySelector('#mail').value = '';
            document.querySelector('#message').value = '';
            //console.log('success', res.status);
            }).catch((err) => {
                //console.log('failed', err);
        });

    }

    else {
        alert_message.style.color = 'red';
        alert_message.innerHTML = helping_message;
    }
}

