let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progs span");
let num = document.querySelectorAll(".info h2 span");


window.onscroll = function (ele){
    if(window.scrollY >= section.offsetTop - 100){
        spans.forEach(function(span){
            let width = span.dataset.width;
           span.style.width = width;
           let count = setInterval(function(){
           num.forEach(function(el){
               el.textContent++;
               if(el.textContent = el.dataset.pro){
                   clearInterval(count);
               }
           })
         },200);
        });
    };
};



let currentTime = new Date("Wed May 16, 2022 12:27:47").getTime();

let count =setInterval(()=>{
    let Time = new Date().getTime();
     let event = currentTime - Time;
     let days = Math.floor(event / (1000 * 60 * 60 * 24));
     let hour = Math.floor((event % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let min = Math.floor((event % (1000 * 60 * 60)) / (1000 * 60));
     let second = Math.floor((event % (1000 * 60)) / (1000 ));

     document.querySelector(".info .second").innerHTML = second;
     document.querySelector(".info .minutes").innerHTML = min;
     document.querySelector(".info .days").innerHTML = days;
     document.querySelector(".info .hours").innerHTML = hour;
    // console.log(da);
},1000);


// let sec = Math.floor(event / 1000);   
//  second.innerHTML= sec; 

let showMega = document.querySelector(".mega-toggle");
let megaMenu = document.querySelector(".mega-menu");
let hideMega = document.querySelector(".mega-menu span");



        megaMenu.onclick = function (){
            megaMenu.style.cssText ="transform: translatey(-150%)";
    }
showMega.onclick = function (){
    megaMenu.style.cssText ="transform: translatey(0)";
}