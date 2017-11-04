var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'Febuary', 'March'],
        datasets: [
            {
                label: 'Anxiety',
                data: [0.1, 0.1, 0.5],
                backgroundColor: "rgba(237, 206, 122, 0.4)",
                borderColor: "rgba(237, 206, 122, 1)",
                borderWidth: 5,
                pointBorderWidth: 10,
    },
            {
                label: 'Acceptance',
                data: [0.5, 0.5, 1],
                backgroundColor: "rgba(15, 171, 137, 0.2)",
                borderColor: "rgba(15, 171, 137, 1)",
                borderWidth: 5,
                pointBorderWidth: 10,
    },
            {
                label: 'Happiness',
                data: [1.5, 0.6, 1.5],
                backgroundColor: "rgba(229, 153, 137, 0.2)",
                borderColor: "rgba(229, 153, 137, 1)",
                borderWidth: 5,
                pointBorderWidth: 10,
    }
              ]
    }
    
});
