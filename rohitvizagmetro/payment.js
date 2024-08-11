// payment.js
document.addEventListener('DOMContentLoaded', function() {
    const bookingDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
    
    if (bookingDetails) {
        document.getElementById('summaryDate').textContent = bookingDetails.date;
        document.getElementById('summaryTime').textContent = bookingDetails.time;
        document.getElementById('summaryFrom').textContent = bookingDetails.from;
        document.getElementById('summaryTo').textContent = bookingDetails.to;
        document.getElementById('summaryTrainNumber').textContent = bookingDetails.trainNumber;
        document.getElementById('summaryCost').textContent = bookingDetails.cost;
    }

    document.getElementById('payButton').addEventListener('click', function() {
        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (cardName && cardNumber && expiryDate && cvv) {
            console.log(`Cardholder Name: ${cardName}`);
            console.log(`Card Number: ${cardNumber}`);
            console.log(`Expiry Date: ${expiryDate}`);
            console.log(`CVV: ${cvv}`);

            // Simulate payment processing
            setTimeout(() => {
                // Redirect to the confirmation page
                window.location.href = 'confirmation.html';
            }, 500);
        } else {
            alert('Please fill all the fields.');
        }
    });
});
