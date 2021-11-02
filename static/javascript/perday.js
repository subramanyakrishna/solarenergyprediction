function lineChartJsForDay(time, solarOutputPerhours) {
  var ctx = document.getElementById("lineChartPerDay").getContext("2d");
  ctx.innerHTML = "loading";
  Chart.defaults.font.size = window.innerWidth > 600 ? 20 : 14;
  var lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: time,
      datasets: [
        {
          label: "Solar Energy output per hour",
          data: solarOutputPerhours,
          fill: false,
          borderColor: "rgb(75,193,192)",
          lineTension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            display: true,
            text: "Solar Energy Per hour",
            color: "rgb(75,192,192)",
            align: "center",
          },
        },
        x: {
          title: {
            display: true,
            text: "hours in a day",
            color: "rgb(75,192,192)",
            align: "center",
          },
        },
      },
    },
  });
}
