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
            data: [0, 10, 5, 2]
        }]
    },

    // Configuration options go here
    options: {}
});