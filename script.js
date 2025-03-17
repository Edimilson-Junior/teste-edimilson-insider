function startCountdown(durationInMinutes) {
    let totalSeconds = durationInMinutes * 60;
    
    function updateTimer() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

        if (totalSeconds > 0) {
            totalSeconds--;
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer();
}

startCountdown(49);