(function(){
  'use strict';

  function addTwo(){
    var $btnA = $('<button type="button" id="btnA">Button A</button>');
    var $btnB = $('<button type="button" id="btnB">Button B</button>');
    $('#dynamic').append($btnA, $btnB);
  }

  function dynamicClick(){
    switch(this.id){
      case 'btnA':
        $('#add-two').detach();
      case 'btnB':
        $('#btnA').detach();
    }
  }

  function init(){
    $('#add-two').click(addTwo);
    $('#dynamic').on('click','button', dynamicClick);
  }

  $(document).ready(init);

})();
