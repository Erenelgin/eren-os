let picerik = document.getElementById("picerik");
let gameicerik = document.getElementById("gameicerik");
let project = document.getElementById("project");
let project2 = document.getElementById("project2");
let kapa1 = document.getElementById("kapa1");
let kapa2 = document.getElementById("kapa2");
let project3 = document.getElementById("project3");
let kapa3 = document.getElementById("kapa3");
let abauticerik = document.getElementById("abauticerik");
let project4 = document.getElementById("project4");
let kapa4 = document.getElementById("kapa4");
let myskills = document.getElementById("myskills");
let project5 = document.getElementById("project5");
let kapa5 = document.getElementById("kapa5");
let activity = document.getElementById("activity");
let project6 = document.getElementById("project6");
let kapa6 = document.getElementById("kapa6");
let iletisim = document.getElementById("iletisim");
let zIndex = 10;
picerik.addEventListener('click', function(){
       project.style.display="block";
       project.style.animation="slide 2s ease";
       project.style.zIndex = zIndex++;
})
kapa1.addEventListener('click', function(){
       project.style.display="none";
       
})

gameicerik.addEventListener('click', function(){
       project2.style.display="block";
       project2.style.animation="slide 2s ease";
       project2.style.zIndex = zIndex++;
})
kapa2.addEventListener('click', function(){
       project2.style.display="none";
})
abauticerik.addEventListener('click', function(){
       project3.style.display="block";
       project3.style.animation="slide 2s ease";
       project3.style.zIndex = zIndex++;
})
kapa3.addEventListener('click', function(){
       project3.style.display="none";
})
myskills.addEventListener('click', function(){
       project4.style.display="block";
       project4.style.animation="slide 2s ease";
       project4.style.zIndex = zIndex++;
})
kapa4.addEventListener('click', function(){
       project4.style.display="none";
       
})
activity.addEventListener('click', function(){
       project5.style.display="block";
       project5.style.animation="slide 2s ease";
       project5.style.zIndex = zIndex++;
})
kapa5.addEventListener('click', function(){
       project5.style.display="none";
})
iletisim.addEventListener('click', function(){
       project6.style.display="block";
       project6.style.animation="slide 2s ease";
       project6.style.zIndex = zIndex++;
})
kapa6.addEventListener('click', function(){
       project6.style.display="none";
})