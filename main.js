// Function to update current time in UTC
function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; 
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTime').textContent = utcTime;
    document.getElementById('currentDay').textContent = day;
}

// Update time on load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
