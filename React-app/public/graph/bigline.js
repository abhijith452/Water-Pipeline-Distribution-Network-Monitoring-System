
var ctx = document.getElementById('canvasbline').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12:21', '12:22', '12:23', '12:24', '12:25', '12:26'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
let data;
async function Something(){
    const url = "https://iotdata23.table.core.windows.net/Iotdata?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-02-29T11:20:26Z&st=2020-02-29T03:20:26Z&spr=https&sig=WIL%2BBPZ6akcHwhssmOfzxXJes8KGdQWvVsY1Xz0a%2FlA%3D";
    const response = await fetch(url,requestOptions);
    data = await response.json();
};
Something();
Console.log(data);