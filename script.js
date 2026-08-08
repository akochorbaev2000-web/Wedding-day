// =====================================
// ЭЛЕМЕНТЫ
// =====================================

const envelope =
    document.getElementById("openBtn");

const music =
    document.getElementById("music");

const guestSection =
    document.querySelector(".guest-section");

let opened = false;





// =====================================
// ЛЕПЕСТКИ
// =====================================

const petals =
    document.querySelector(".petals");


for(let i = 0; i < 45; i++){

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.width =
        (8 + Math.random() * 9) + "px";

    petal.style.height =
        (8 + Math.random() * 9) + "px";

    petal.style.opacity =
        0.35 + Math.random() * 0.5;

    petal.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    petal.style.animationDelay =
        Math.random() * 8 + "s";

    petals.appendChild(petal);

}





// =====================================
// ОТКРЫТИЕ КОНВЕРТА
// =====================================

envelope.addEventListener("click", function(){

    if(opened){
        return;
    }


    opened = true;


    envelope.classList.add("open");


    setTimeout(function(){

        document.body.classList.add("opened");

    }, 1200);



    // Музыка

    if(music){

        music.volume = 0.35;

        music.play().catch(function(){

            console.log(
                "Автоматическое воспроизведение музыки заблокировано браузером."
            );

        });

    }

});





// =====================================
// ПОКАЗ ВТОРОЙ СТРАНИЦЫ
// =====================================

window.addEventListener("scroll", function(){

    if(!opened){
        return;
    }


    const position =
        guestSection.getBoundingClientRect().top;


    if(
        position <
        window.innerHeight * 0.85
    ){

        guestSection.classList.add("show");

    }

});





// =====================================
// ОБРАТНЫЙ ОТСЧЁТ
// =====================================

const weddingDate =
    new Date(
        "October 16, 2026 17:00:00"
    ).getTime();


function updateTimer(){

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if(distance <= 0){

        document.getElementById("days").textContent =
            "00";

        document.getElementById("hours").textContent =
            "00";

        document.getElementById("minutes").textContent =
            "00";

        document.getElementById("seconds").textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2,"0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2,"0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2,"0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2,"0");

}


updateTimer();


setInterval(
    updateTimer,
    1000
);
