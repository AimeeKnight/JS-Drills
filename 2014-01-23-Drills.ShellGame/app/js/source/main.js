(function(){
  'use strict';
  var rand;
  var score = 0;

  function randNum(){
    rand = Math.floor(Math.random() * 3);
    $('#rand').text(rand);
    return rand;
  }

  function choice(){
    var ltrId = $(this).attr('id') *1;
    if (ltrId === rand){
      $('#result').text('You Win!');
      updateScore();
    }else{
      $('#result').text('Try Again');
    }
  }

  function updateScore(){
    score ++;
    $('#score').text(score);
  }

  function init(){
    $('#play').click(randNum);
    $('#boxes').on('click', '.box', choice);
  }

  $(document).ready(init);

})();
