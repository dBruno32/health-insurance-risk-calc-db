const ageScore = document.getElementById('ageScore').innerHTML;
const bmiScore = document.getElementById('bmiScore').innerHTML;
const bpScore = document.getElementById('bpScore').innerHTML;
const familyHistoryScore = document.getElementById('familyHistoryScore').innerHTML;


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Age', 'BMI', 'Blood-Pressure', 'Family-History'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [ageScore, bmiScore, bpScore, familyHistoryScore]
        }]
    },

    // Configuration options go here
    options: {}
});