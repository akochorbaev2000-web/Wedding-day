
// =====================================
// ЭЛЕМЕНТЫ
// =====================================

const envelope =
    document.getElementById("openBtn");

const music =
    document.getElementById("music");

const guestSection =
    document.querySelector(".guest-section");

const petals =
    document.querySelector(".petals");

let opened = false;


// =====================================
// ЛЕПЕСТКИ
// =====================================

if (petals) {

    for (let i = 0; i < 45; i++) {

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

}



// =====================================
// ОТКРЫТИЕ КОНВЕРТА
// =====================================

if (envelope) {

    envelope.addEventListener(
        "click",
        function () {


            // Защита от повторного открытия

            if (opened) {
                return;
            }


            opened = true;


            // Запускаем анимацию конверта

            envelope.classList.add("open");



            // =================================
            // РАЗРЕШАЕМ ПРОКРУТКУ
            // =================================

            setTimeout(
                function () {

                    document.body.classList.add(
                        "opened"
                    );

                },
                1200
            );



            // =================================
            // МУЗЫКА
            // =================================

            if (music) {

                music.volume = 0.35;


                music.play().catch(
                    function () {

                        console.log(
                            "Автоматическое воспроизведение музыки заблокировано браузером."
                        );

                    }
                );

            }


        }
    );

}



// =====================================
// ПОКАЗ ВТОРОЙ СТРАНИЦЫ
// =====================================

window.addEventListener(
    "scroll",
    function () {


        // Конверт должен быть открыт

        if (!opened) {
            return;
        }


        // Проверяем наличие второй страницы

        if (!guestSection) {
            return;
        }


        const position =
            guestSection
                .getBoundingClientRect()
                .top;


        if (
            position <
            window.innerHeight * 0.85
        ) {

            guestSection.classList.add(
                "show"
            );

        }

    }
);



// =====================================
// ОБРАТНЫЙ ОТСЧЁТ
// =====================================

// Свадьба:
// 16 октября 2026
// 17:00
// Кыргызстан — UTC+6

const weddingDate =
    new Date(
        "2026-10-16T17:00:00+06:00"
    ).getTime();



function updateTimer() {


    // =================================
    // ТЕКУЩЕЕ ВРЕМЯ
    // =================================

    const now =
        new Date().getTime();


    // =================================
    // ОСТАВШЕЕСЯ ВРЕМЯ
    // =================================

    const distance =
        weddingDate - now;



    // =================================
    // ЕСЛИ ДАТА УЖЕ НАСТУПИЛА
    // =================================

    if (distance <= 0) {


        const days =
            document.getElementById("days");


        const hours =
            document.getElementById("hours");


        const minutes =
            document.getElementById("minutes");


        const seconds =
            document.getElementById("seconds");



        if (days) {

            days.textContent =
                "00";

        }


        if (hours) {

            hours.textContent =
                "00";

        }


        if (minutes) {

            minutes.textContent =
                "00";

        }


        if (seconds) {

            seconds.textContent =
                "00";

        }


        return;

    }



    // =================================
    // ДНИ
    // =================================

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );



    // =================================
    // ЧАСЫ
    // =================================

    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );



    // =================================
    // МИНУТЫ
    // =================================

    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );



    // =================================
    // СЕКУНДЫ
    // =================================

    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );



    // =================================
    // ЭЛЕМЕНТЫ ТАЙМЕРА
    // =================================

    const daysElement =
        document.getElementById("days");


    const hoursElement =
        document.getElementById("hours");


    const minutesElement =
        document.getElementById("minutes");


    const secondsElement =
        document.getElementById("seconds");



    // =================================
    // ВЫВОД ДНЕЙ
    // =================================

    if (daysElement) {

        daysElement.textContent =
            String(days).padStart(2, "0");

    }



    // =================================
    // ВЫВОД ЧАСОВ
    // =================================

    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }



    // =================================
    // ВЫВОД МИНУТ
    // =================================

    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }



    // =================================
    // ВЫВОД СЕКУНД
    // =================================

    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}



// =====================================
// ЗАПУСК ТАЙМЕРА
// =====================================

updateTimer();


// Обновляем каждую секунду

setInterval(
    updateTimer,
    1000
);
