(function(){
  'use strict';

  function addImg(){
    var url = $('#url').val();
    var $imgDiv = $('<div class="dynamicImg"></div>').css('background-image', 'url(' + url + ')');
    $('#imgs').append($imgDiv);
  }

  function init(){
    $('#addImg').click(addImg);
  }

  $(document).ready(init);

})();
