//
// ЗАГРУЗКА САЙТА
//

window.onload = function(){

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList.add("hide");

    },2000);

};





//
// ОТКРЫТИЕ КОНВЕРТА
//


let opened = false;


function openInvitation(){


    if(opened) return;


    opened = true;



    let envelope =
    document.querySelector(".envelope");



    envelope.classList.add("open");



    document
    .querySelector(".cover")
    .classList.add("blur");




    setTimeout(()=>{


        document
        .getElementById("cover")
        .style.display="none";



        document
        .getElementById("site")
        .classList.remove("hidden");



        startMusic();



        createPetals();



    },1500);



}







//
// МУЗЫКА
//


let musicPlaying=false;



function startMusic(){


let music =
document.getElementById("music");



music.volume=0;



music.play()

.then(()=>{


musicPlaying=true;



let volume=0;



let fade=setInterval(()=>{


if(volume<0.35){


volume+=0.02;


music.volume=volume;


}

else{


clearInterval(fade);


}



},100);



})


.catch(()=>{


console.log(
"Нажмите кнопку 🎻 для включения музыки"
);


});


}





function toggleMusic(){


let music =
document.getElementById("music");



if(musicPlaying){


music.pause();


musicPlaying=false;


}

else{


music.play();


musicPlaying=true;


}



}








//
// ЛЕПЕСТКИ РОЗ
//


function createPetals(){


for(let i=0;i<40;i++){



let petal =
document.createElement("div");



petal.className="petal";



petal.style.left =
Math.random()*100+"vw";



petal.style.animationDuration =
(4+Math.random()*5)+"s";



document.body.appendChild(petal);



setTimeout(()=>{


petal.remove();


},9000);



}



}








//
// ПОЯВЛЕНИЕ БЛОКОВ
//


let reveals =
document.querySelectorAll(".reveal");




window.addEventListener("scroll",()=>{


reveals.forEach(item=>{


let position =
item.getBoundingClientRect()
.top;



if(position <
window.innerHeight-100){


item.classList.add("show");


}



});



});








//
// ТАЙМЕР
//



let weddingDate =
new Date(
"October 16 2026 16:00:00"
)
.getTime();




function updateTimer(){



let now =
new Date()
.getTime();



let distance =
weddingDate-now;



if(distance<=0){


document.getElementById("timer")
.innerHTML=
"Сегодня наш день ❤️";


return;


}




let days =
Math.floor(
distance /
(1000*60*60*24)
);



let hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);



let minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);



let seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);





document.getElementById("timer")
.innerHTML =


days+" дней · "+

hours+" часов · "+

minutes+" минут · "+

seconds+" секунд";




}



setInterval(updateTimer,1000);


updateTimer();
