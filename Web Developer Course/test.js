let myChart = document.getElementById('myChart').getContext('2d');

let liveChart = new Chart(myChart, {
  type: 'line',
  data:{
    labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[{
      label:'Population',
      data:[
        600000,
        180000,
        150000,
        100000,
        100000,
        90000
      ]
    }]
  },
  options:{}
});
