$(document).ready(function(){
  var loc;
 	var lat;
  var lon;
  var api;
  var farhT, highfarhT, lowfarhT;
  var celT, highcelT, lowcelT;
  var windSpeed;
  var swap = true;
  var symbolF,symbolC;
	
  $.getJSON("http://ip-api.com/json",function(position) {
     lat = position.lat;
     lon = position.lon;
		
     api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=e6adfa272ccef59b2e4c9848be8aad08";
  
		$.getJSON(api, function(data) {
			var weather = data.weather[0].description;
			var tempKelvin = data.main.temp;
			var temp_min = data.main.temp_min;
			var temp_max = data.main.temp_max;
			
			windSpeed = data.wind.speed;
			symbolF = "F";
			symbolC = "C";

			farhT = (tempKelvin*(9/5) - 459.67).toFixed()+" &deg;"+symbolF;

			celT = (tempKelvin-273).toFixed()+" &deg;"+ symbolC;

			windSpeed = (3.6*windSpeed).toFixed(1)+" Km/h";

			// console.log(weather);
			// console.log(farhT+" "+celT);
			
			// console.log(data);
			$('#icon').append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
			// console.log("data.weather[0].icon");
			$('#location').append(position.city + ", ").append(position.country);
			$("#weather").html(weather);
			$("#windSpeed").html(windSpeed);
			$("#farhT").html(farhT);

			$("#farhT").click(function () {
				if (swap === false) {
					$("#farhT").html(farhT);
					swap = true;
				}
				else {
					$("#farhT").html(celT);
					swap = false;
				}
			});
	 });
  });
});