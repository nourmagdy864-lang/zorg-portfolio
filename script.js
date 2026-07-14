// ===============================
// ZORG Website Script
// ===============================


// Cursor

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



function cursorGrow(){

    cursor.style.transform =
    "translate(-50%,-50%) scale(2)";

}



function cursorNormal(){

    cursor.style.transform =
    "translate(-50%,-50%) scale(1)";

}






// ===============================
// Projects Gallery
// ===============================


const gallery = document.getElementById("gallery");


const projects = [

"project1.jpg",
"project2.jpg",
"project3.jpg",
"project4.jpg",
"project5.jpg",
"project6.jpg",
"project7.jpg",
"project8.jpg",
"project9.jpg",
"project10.jpg",
"project11.jpg",
"project12.jpg",
"project13.jpg",
"project14.jpg",
"project15.jpg",
"project16.jpg",
"project17.jpg",

"project18.png",
"project19.png",
"project20.png",
"project21.png",
"project22.png",
"project23.png",
"project24.png",
"project25.png",
"project26.png",
"project27.png",
"project28.png",
"project29.png",
"project30.png"

];



projects.forEach((image,index)=>{


gallery.innerHTML += `

<div class="project-card">


<img src="assets/images/${image}">


<div class="overlay">

<h3>
Project ${index + 1}
</h3>


<p>
ZORG Creative Work
</p>


</div>


</div>

`;

});






// ===============================
// Cursor Hover
// ===============================


setTimeout(()=>{


const hoverElements = document.querySelectorAll(
"a, button, .project-card, img"
);



hoverElements.forEach(el=>{


el.addEventListener(
"mouseenter",
cursorGrow
);



el.addEventListener(
"mouseleave",
cursorNormal
);



});



},500);







// ===============================
// 3D Card Movement
// ===============================


setTimeout(()=>{


const cards =
document.querySelectorAll(".project-card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
(y - rect.height/2) / 8;


const rotateY =
(rect.width/2 - x) / 8;



card.style.transform =

`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";

});


});


},500);







// ===============================
// Lightbox
// ===============================


const lightbox =
document.getElementById("lightbox");


const lightboxImg =
document.getElementById("lightbox-img");


const close =
document.querySelector(".close");



document.querySelectorAll(".project-card img")
.forEach(img=>{


img.addEventListener(
"click",
()=>{


lightbox.style.display="flex";


lightboxImg.src =
img.src;


});


});



close.onclick = ()=>{

lightbox.style.display="none";

};






// ===============================
// Buttons
// ===============================


function goProjects(){

document
.getElementById("projects")
.scrollIntoView({

behavior:"smooth"

});

}



function goContact(){

document
.getElementById("contact")
.scrollIntoView({

behavior:"smooth"

});

}// ===============================
// Stats Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat-box h2");


counters.forEach(counter => {

let target = counter.innerText;

let number = parseInt(target);


let count = 0;


let speed = number / 80;


let update = setInterval(()=>{


count += speed;


if(count >= number){

count = number;

clearInterval(update);

}


counter.innerText =
Math.floor(count) + target.replace(/[0-9]/g,"");


},20);


});// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
"section, .project-card, .service-card, .testimonial-card, .stat-box"
);


window.addEventListener("scroll", ()=>{

revealElements.forEach(el=>{

const position = el.getBoundingClientRect().top;

const screen = window.innerHeight - 100;


if(position < screen){

el.classList.add("show");

}

});

});