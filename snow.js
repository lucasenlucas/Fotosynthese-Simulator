let snowInterval;

function startSnow() {
    if (snowInterval) return; // Voorkom meerdere intervallen
    const body = document.body;
    snowInterval = setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }, 200);
}

function stopSnow() {
    clearInterval(snowInterval);
    snowInterval = null;
    document.querySelectorAll(".snowflake").forEach(snowflake => snowflake.remove());
}

/* CSS voor sneeuwvlokken */
const snowflakeStyles = document.createElement("style");
snowflakeStyles.innerHTML = `
.snowflake {
    position: fixed;
    top: 0;
    color: white;
    pointer-events: none;
    animation: fall linear infinite;
}

@keyframes fall {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
}
`;
document.head.appendChild(snowflakeStyles);
