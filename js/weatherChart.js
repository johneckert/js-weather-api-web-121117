function getFahrenheits(result) {
  return result.hourly_forecast.map(function(hourObj) {
    return hourObj["FCTTIME"]["hour"];
  });
}

function getHours(result) {
  return result.hourly_forecast.map(function(hourObj) {
    return hourObj["temp"]["english"];
  });
}

function generateDataSet(labels, data) {
  //hours = labels  f = data
  return {
    labels: data,
    datasets: [
      {
        label: "Hours",
        data: labels,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
}

function makeRequest(endpoint, success) {
  // Your code goes here
}
