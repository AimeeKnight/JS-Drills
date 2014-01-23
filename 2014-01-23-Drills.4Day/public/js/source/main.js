/* jshint camelcase:false */

(function(){
  'use strict';

  function addZip(){
    var $zip =  $('#zip').val();
    var $op = $('<option>').text($zip).val($zip);
    $('#dropDown').append($op);
  }

  function receive(data){
    //debugger;
    console.log(data);
    var day1 = data.forecast.simpleforecast.forecastday[0];
    var day2 = data.forecast.simpleforecast.forecastday[1];
    var day3 = data.forecast.simpleforecast.forecastday[2];
    var day4 = data.forecast.simpleforecast.forecastday[3];

    var days = [day1, day2, day3, day4];
    displayDays(days);
  }

  function displayDays(days){
    $.each(days, function(idx, day){
      var date = day.date.weekday;
      var forecast = day.conditions;
      var icon = day.icon_url;
      var dayBox = $('<p>'+date+'</p>');
      var dayForecast = $('<p>'+forecast+'</p>');
      var dayForecastBox = $('<div class="box"></div>');
      dayForecastBox.append(dayBox, dayForecast);
      var iconBox = $('<div class="icon"></div>').css('background-image', 'url('+icon+')');
      $('#tom').append(dayForecastBox,iconBox);
    });
  }

  function getForecast(){
    var zip = $('#dropDown option:selected').val();
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/forecast/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function init(){
    $('#addzip').click(addZip);
    $('#getForecast').click(getForecast);
  }

  $(document).ready(init);

})();
