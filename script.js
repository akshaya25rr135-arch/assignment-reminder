function startReminder() {
    const task = document.getElementById("task").value;
    const timeValue = document.getElementById("time").value;

    if (task === "" || timeValue === "") {
        alert("Please enter all details");
        return;
    }

    const deadline = new Date(timeValue);
    alert("Reminder set!");

    const interval = setInterval(() => {
        if (new Date() >= deadline) {
            showPopup(task);
            clearInterval(interval);
        }
    }, 1000);
}

function showPopup(task) {
    document.getElementById("popupText").innerText =
        "🔔 Deadline Reminder: " + task;
    document.getElementById("imagePopup").style.display = "block";
}

function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
}
