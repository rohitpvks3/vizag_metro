// scripts.js
const trainData = {
    "Station A": {
        "Station X": [
            { number: "AX1", cost: 50 },
            { number: "AX2", cost: 60 }
        ],
        "Station Y": [
            { number: "AY1", cost: 70 },
            { number: "AY2", cost: 80 }
        ],
        "Station Z": [
            { number: "AZ1", cost: 100 },
            { number: "AZ2", cost: 110 }
        ]
    },
    "Station B": {
        "Station X": [
            { number: "BX1", cost: 55 },
            { number: "BX2", cost: 65 }
        ],
        "Station Y": [
            { number: "BY1", cost: 70 },
            { number: "BY2", cost: 80 }
        ],
        "Station Z": [
            { number: "BZ1", cost: 75 },
            { number: "BZ2", cost: 85 }
        ]
    },
    "Station C": {
        "Station X": [
            { number: "CX1", cost: 55 },
            { number: "CX2", cost: 65 }
        ],
        "Station Y": [
            { number: "CY1", cost: 75 },
            { number: "CY2", cost: 85 }
        ],
        "Station Z": [
            { number: "CZ1", cost: 100 },
            { number: "CZ2", cost: 110 }
        ]
    }
};

document.getElementById('proceedButton').addEventListener('click', function() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const train = document.getElementById('train').value;
    const cost = document.getElementById('cost').value;

    if(date && time && from && to && train) {
        const bookingDetails = {
            date,
            time,
            from,
            to,
            trainNumber: train,
            cost
        };

        sessionStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

        setTimeout(() => {
            window.location.href = 'payment.html';
        }, 500);
    } else {
        alert('Please fill all the fields.');
    }
});

document.getElementById('from').addEventListener('change', updateTrainOptions);
document.getElementById('to').addEventListener('change', updateTrainOptions);
document.getElementById('train').addEventListener('change', updateCost);

function updateTrainOptions() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const trainSelect = document.getElementById('train');
    trainSelect.innerHTML = '';

    if (trainData[from] && trainData[from][to]) {
        trainData[from][to].forEach(train => {
            const option = document.createElement('option');
            option.value = train.number;
            option.textContent = train.number;
            option.dataset.cost = train.cost;
            trainSelect.appendChild(option);
        });
    }

    updateCost();
}

function updateCost() {
    const trainSelect = document.getElementById('train');
    const selectedOption = trainSelect.selectedOptions[0];
    const cost = selectedOption ? selectedOption.dataset.cost : '';
    document.getElementById('cost').value = cost;
}
