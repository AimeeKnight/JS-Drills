/* jshint camelcase:false */

(function(){
  'use strict';

  function addChoice(){
    var $choice = $('#choice').val();
    var $op = $('<option>').text($choice.toUpperCase()).val($choice);
    $('#dropDown').append($op);
    $('#choice').focus().val('');
  }

  function changeColor(){
    var $choice = $('#dropDown option:selected').text();
    $('#paint').css('background-color', $choice);
  }

  function init(){
    $('#addOp').click(addChoice);
    $('#dropDown').change(changeColor);
  }

  $(document).ready(init);

})();
