function toggleNotifications() {
    let checkbox = document.getElementById("notifications");
    if (checkbox.checked) {
        alert("Hydration reminders activated!");
    } else {
        alert("Hydration reminders turned off.");
    }
}

// Hydration tracking graph (Mock Data)
const hydrationData = [500, 750, 900, 1100, 1300, 1500]; // Mock values in ml
const ctx = document.getElementById("hydrationChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
            label: "Water Intake (ml)",
            data: hydrationData,
            borderColor: "#0057e7",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});
