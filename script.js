function yes() {
    document.getElementById("result").innerHTML =
        "💖 Yay! ❤️<br><br>Thank You, My Love! 🌹<br>I Promise to Love You Forever. 💍";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

for (let i = 0; i < 40; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animation = `fall ${5 + Math.random() * 8}s linear infinite`;
    heart.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(heart);
}