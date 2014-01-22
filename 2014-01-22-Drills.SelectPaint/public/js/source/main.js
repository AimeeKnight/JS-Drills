/* jshint camelcase:false */

(function(){
  'use strict';

  function addChoice(){
    var $choice = $('#choice').val();
    var $op = $('<option>').text($choice.toUpperCase()).val($choice.toLowerCase);
    $('#dropDown').append($op);
    $('#choice').focus().val('');
  }

  function changeColor(){
    var $choice = $('#dropDown option:selected').text();
    $('#paint').css('background-color', $choice);
    $('h1').css('color', $choice);
  }

  function init(){
    $('#addOp').click(addChoice);
    $('#dropDown').change(changeColor);
  }

  $(document).ready(init);

})();
