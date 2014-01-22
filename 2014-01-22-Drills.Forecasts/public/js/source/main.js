/* jshint camelcase:false */

(function(){
  'use strict';

  function receive(data){
    //debugger;
    console.log(data);
    var tom = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    $('#tom').text(tom);
  }

  function addZip(){
    var $zip = $('#zip').val();
    var $op = $('<option>').text($zip).val($zip);
    $('#dropDown').append($op);
    $('#choice').focus().val('');
  }

  function getWeather(){
    var zip = $('#dropDown option:selected').val();
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/forecast/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function init(){
    $('#addzip').click(addZip);
    $('#getForecast').click(getWeather);
  }

  $(document).ready(init);

})();
