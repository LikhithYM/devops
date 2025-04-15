// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("2025-04-25T18:00:00");  // Set your event date
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById("countdown").innerText = "The event has started!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Form Validation (optional)
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});
