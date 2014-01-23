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

  function init(){
    $('#addWords').click(addWords);
    $('#wordBoxes').on('click', '.word', useWord);
  }

  $(document).ready(init);

})();
