(function(){
  'use strict';

  function randColor(){
    return Math.floor(Math.random() * 255);
  }

  function addColor(){
    var colors = $('#colors').val().split(',');
    $(colors).each(function(index, value){
      var $box = $('<div class="color">').text(index + 1).css('background-color', value);
      $('#newColors').append($box);
    });
  }

  function addSumBox(){
    var numColors = $('#colors').val().split(',').length;
    var boxNum = 0;
    for (var i=1; i<=numColors; i++){
      boxNum += i;
      // boxNum *= i;
    }
    var $randBox = $('<div id="numBox">' + boxNum  + '</div>').css('background-color', 'rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')');
    $('#randBox').append($randBox);
  }

  function init(){
    $('#addColor').click(addColor);
    $('#addColor').click(addSumBox);
  }

  $(document).ready(init);

})();
