(function(){

  'use strict';

  $(document).ready(init);

  var exponent = 0;
  var timer;

  function init(){
    $('#grow').click(start);
  }

  function start(){
    var delay = $('#delay').val()*1000;
    timer = setInterval(grow, delay);
  }

  function grow(){
    var base = $('#num').val() * 1;
    var result = Math.pow(base, exponent);
    $('#display h4').html(base + ' ^ '  + exponent + ' = ' + result);
    exponent ++;
    //var  baseSpan = $('<span>').text(base);
    //var  exponentSpan = $('<span>').text(exponent);
    //var  numSpan = $('<span>').text(num);
  }

})();
