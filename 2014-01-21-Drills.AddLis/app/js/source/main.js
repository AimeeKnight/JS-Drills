(function(){
  'use strict';

  function addLis(){
    var $numLis = $('#numLis').val() *1;
    for (var i=1; i <=$numLis; i++){
      if (i % 2 === 0 && i !==1){
        $('#liContainer').append('<li class="even">' + i + '</li');
      }else{
        $('#liContainer').append('<li class="odd">' + i + '</li');
      }
    }
  }

  function init(){
    $('#addLis').click(addLis);
  }

  $(document).ready(init);

})();
