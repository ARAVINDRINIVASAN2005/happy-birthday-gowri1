// ==============================
// Birthday Greeting Website
// script.js
// ==============================

// Pages
const pages = document.querySelectorAll(".page");

const welcome = document.getElementById("welcome");
const message = document.getElementById("message");
const cakePage = document.getElementById("cakePage");
const gallery = document.getElementById("gallery");
const giftPage = document.getElementById("giftPage");
const finalPage = document.getElementById("finalPage");

// Buttons
const startBtn = document.getElementById("startBtn");
const nextBtn = document.querySelector(".nextBtn");
const nextBtn2 = document.querySelector(".nextBtn2");
const nextBtn3 = document.querySelector(".nextBtn3");

// Music
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

// Cake
const cake = document.getElementById("cake");

// Gift
const giftBox = document.getElementById("giftBox");

// Typing Text
const typingText = document.getElementById("typingText");

// Message
const messageText = `Happy Birthday gowri❤️ !

Today is your special day.

May every dream you have come true.

May happiness, success, peace and love
follow you every day.

Thank you for being an amazing person.

Keep smiling...

Enjoy your beautiful day!

Happy Birthday ❤️`;

// ==============================
// Show Page
// ==============================

function showPage(page){

    pages.forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");
}

// ==============================
// Typing Effect
// ==============================

let index = 0;

function typeWriter(){

    if(index < messageText.length){

        typingText.innerHTML += messageText.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

// ==============================
// Start
// ==============================

startBtn.addEventListener("click",()=>{

    showPage(message);

    music.play();

    typeWriter();

});

// ==============================
// Continue Buttons
// ==============================

nextBtn.addEventListener("click",()=>{

    showPage(cakePage);

});

nextBtn2.addEventListener("click",()=>{

    showPage(gallery);

});

nextBtn3.addEventListener("click",()=>{

    showPage(giftPage);

});

// ==============================
// Music Toggle
// ==============================

let playing=true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';

    }else{

        music.play();

        musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

    }

    playing=!playing;

});

// ==============================
// Cake Animation
// ==============================

cake.addEventListener("click",()=>{

    const flame=document.querySelector(".flame");

    flame.style.opacity="0";

    cake.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],{

        duration:600

    });

});

// ==============================
// Gift Animation
// ==============================

giftBox.addEventListener("click",()=>{

    giftBox.classList.add("open");

    setTimeout(()=>{

        showPage(finalPage);

        startConfetti();

    },2500);

});

// ==============================
// Confetti
// ==============================

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let confetti=[];

function random(min,max){

    return Math.random()*(max-min)+min;

}

function createConfetti(){

    confetti=[];

    for(let i=0;i<250;i++){

        confetti.push({

            x:random(0,canvas.width),

            y:random(-canvas.height,0),

            r:random(3,8),

            speed:random(2,6),

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.fillStyle=c.color;

        ctx.beginPath();

        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

        ctx.fill();

        c.y+=c.speed;

        if(c.y>canvas.height){

            c.y=-10;

        }

    });

    requestAnimationFrame(drawConfetti);

}

function startConfetti(){

    createConfetti();

    drawConfetti();

}

// ==============================
// Resize
// ==============================

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});