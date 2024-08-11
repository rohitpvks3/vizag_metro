// confirmation.js
document.addEventListener('DOMContentLoaded', function() {
    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
    
    if (bookingDetails) {
        document.getElementById('summaryDate').textContent = bookingDetails.date;
        document.getElementById('summaryTime').textContent = bookingDetails.time;
        document.getElementById('summaryFrom').textContent = bookingDetails.from;
        document.getElementById('summaryTo').textContent = bookingDetails.to;
        document.getElementById('summaryTrainNumber').textContent = bookingDetails.trainNumber;
        document.getElementById('summaryCost').textContent = bookingDetails.cost;
        
        // Add the booking date (current date)
        const bookingDate = new Date().toISOString().split('T')[0];
        document.getElementById('bookingDate').textContent = bookingDate;
    }
});
