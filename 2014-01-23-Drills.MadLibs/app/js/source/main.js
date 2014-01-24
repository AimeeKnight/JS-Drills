(function(){
  'use strict';

  function addWords(){
    var words = $('#words').val().split(' ');
    $(words).each(function(index, word){
      var $box = $('<div class="word" id="'+index+'">').text(word);
      $('#wordBoxes').append($box);
    });
  }

  function useWord(){
    var old = $('#sentence').text();
    var $this = $(this);
    var text = $this.text();
    $('#sentence').text(old+'  '+text);
  }

  function clear(){
    $('#sentence').text('');
    $('#wordBoxes').text('');
    $('#words').val('').focus();
  }

  function init(){
    $('#addWords').click(addWords);
    $('#clear').click(clear);
    $('#wordBoxes').on('click', '.word', useWord);
  }

  $(document).ready(init);

})();
