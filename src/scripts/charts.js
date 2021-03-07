const ageScore = document.getElementById('ageScore').innerHTML;
const bmiScore = document.getElementById('bmiScore').innerHTML;
const bpScore = document.getElementById('bpScore').innerHTML;
const familyHistoryScore = document.getElementById('familyHistoryScore').innerHTML;

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: ['Age', 'BMI', 'Blood-Pressure', 'Family-History'],
        datasets: [{
            label: 'Your Risk',
            backgroundColor: 'rgb(101, 107, 159)',
            borderColor: 'rgb(101, 107, 159)',
            data: [ageScore, bmiScore, bpScore, familyHistoryScore]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 75
                }
            }]
        }
    }
});