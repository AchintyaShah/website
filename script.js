document.addEventListener("DOMContentLoaded", function() {
    // Achintya's birthday (May 2nd)
    const birthday = new Date("2024-05-02T00:00:00");

    // Function to update the countdown
    function updateCountdown() {
        const now = new Date();
        const difference = birthday - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("countdown-text").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown-text").innerHTML = "Happy Birthday Achintya!";
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial call to set the countdown
    updateCountdown();
});
