(function(){
  'use strict';

  function addTwo(){
    var $btnA = $('<button type="button" id="btnA">Button A</button>');
    var $btnB = $('<button type="button" id="btnB">Button B</button>');
    $('#dynamic').append($btnA, $btnB);
  }

  function init(){
    $('#add-two').click(addTwo);
    $('#dynamic').on('click','#btnB', function(){
      $('#btnA').hide();
    });

    $('#dynamic').on('click','#btnA', function(){
      $('#add-two').hide();
    });
  }

  $(document).ready(init);

})();
