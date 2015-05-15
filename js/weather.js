$(document).ready(function() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
  } else {
    loadWeather('','12790946')
  }
  
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      htmlc = '<a href="'+weather.link+'">'+weather.city+', '+weather.region+'</a>';
      htmlt = '<a href="'+weather.link+'">'+weather.temp+'&deg;'+weather.units.temp+'</a>';
      htmlw = '<a href="'+weather.link+'">'+weather.currently+'</a>';
      $("#city").html(htmlc);
      $("#temp").html(htmlt);
      $("#weather").html(htmlw);
    },
    error: function(error) {
      $("#city").html('error');
      $("#temp").html('error');
      $("#weather").html('error');
    }
  });
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(loadWeather(position.coords.latitude+','+position.coords.longitude));
}

  
