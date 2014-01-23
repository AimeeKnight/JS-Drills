(function(){
  'use strict';

  function randColor(){
    return Math.floor(Math.random() * 255);
  }

  function addBox(){
    var num = $('#num').val() *1;
    for(var i=num;i>=0;i--){
      var $box = $('<div class="box">').css({'width':+i+'0px', 'height':+i+'0px','border':'4px solid rgb('+randColor()+','+randColor()+','+randColor()+')'});
      $('#boxes').wrap($box);
    }
  }

  function init(){
    $('#inception').click(addBox);
  }

  $(document).ready(init);

})();
