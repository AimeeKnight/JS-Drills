/* jshint camelcase:false */

(function(){
  'use strict';

  function receive(data){
    //debugger;
    console.log(data);
    var desc = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var deg = data.current_observation.wind_degrees;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;

    var wind = [desc, direction, deg, speed, gust];

    $.each(wind, function(idx, val){
      $('#wind').append('<p>'+(idx + 1)+': '+val+'</p>');
    });
    $('#desc').text(desc);
    $('#direction').text(direction);
    $('#degrees').text(deg);
    $('#speed').text(speed);
    $('#gust').text(gust);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function init(){
    $('#get-weather').click(getWeather);
  }

  $(document).ready(init);

})();
