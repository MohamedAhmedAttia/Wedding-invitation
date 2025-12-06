// index.js

const card = document.getElementById("card");
const cardCover = card.querySelector(".card-cover");
const music = document.getElementById("music");

// رابط الـ GIF اللي عايزه يكون background
const gifUrl = "./img/giphy.gif";

card.addEventListener("click", () => {
    // toggle class "open"
    const isOpen = cardCover.classList.toggle("open");

    // تشغيل/إيقاف الموسيقى حسب الحالة
    if (isOpen) {
        if (music.paused) music.play();
    } else {
        music.pause();
    }

    // تغيير خلفية الـ body
    if (isOpen) {
        document.body.style.backgroundImage = `url(${gifUrl})`;
        document.body.style.backgroundRepeat = "repeat"; // تكرار الصورة
        document.body.style.backgroundSize = "auto";     // حجم طبيعي للـ GIF
        document.body.style.backgroundPosition = "top left";
    } else {
        document.body.style.backgroundImage = ""; // ترجع للون/صورة افتراضية
    }
});
