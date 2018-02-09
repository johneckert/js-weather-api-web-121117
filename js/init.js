document.addEventListener("DOMContentLoaded", function() {
  var API_KEY = "17acec1b29fa747b";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/";
  var URL =
    CORS_WRAPPER +
    "http://api.wunderground.com/api/" +
    API_KEY +
    "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d");

  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

  fetch(URL)
    .then(request => request.json())
    .then(json => {
      console.log("gethours: ", getHours(json), "getF: ", getFahrenheits(json));
      var data = generateDataSet(getHours(json), getFahrenheits(json));
      var ctx = document.getElementById("NYCWeatherChart").getContext("2d");
      var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
      // var tempChart = new Chart(ctx, {
      //   type: "line",
      //   data: data,
      //   options: { bezierCurve: true }
      // });

      console.log("json:", json);
      console.log("data:", data);
      console.log("tempChart:", tempChart);
    });
});
