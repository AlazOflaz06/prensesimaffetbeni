// Konfeti fonksiyonu
function startConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 }
        }));
    }, 250);
}

// Kalp uçurma
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

// Parlama efekti
function flashScreen() {
    const flash = document.createElement("div");
    flash.classList.add("flash");
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
}

// Butonlar
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    startConfetti();
    flashScreen();

    // Kalpler
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }

    // Yazı ekle
    const msg = document.createElement("h2");
    msg.textContent = "Artık barıştık ❤️";
    msg.style.color = "white";
    msg.style.textShadow = "0 0 10px red";
    document.body.appendChild(msg);
});

// No butonu kaçma
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
