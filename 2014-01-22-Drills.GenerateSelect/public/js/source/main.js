/* jshint camelcase:false */

(function(){
  'use strict';
  var counter = 0;

  function addChoice(){
    var numOp = $('#dropDown option').length;
    var $choice = $('#choice').val();
    var $op = $('<option>').text($choice).val(numOp);
    $('#dropDown').append($op);
    $('#choice').focus().val('');
    counter ++;
  }

  function init(){
    $('#addOp').click(addChoice);
  }

  $(document).ready(init);

})();
