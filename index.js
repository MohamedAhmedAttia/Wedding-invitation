 // Automatic confetti on page load
    window.onload = function () {
        confetti({
            particleCount: 3000,
            spread: 120000,
            origin: { y: 1 } // تطلع من تحت
        });
    };
const card = document.getElementById("card");
const music = document.getElementById("music");

card.addEventListener("click", () => {
    card.querySelector(".card-cover").classList.toggle("open");
    //music.currentTime = 0; // ترجع الأغنية من البداية
    music.play();
});