(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(addZip);
    $('#cams').click(cams);
  }

  function addZip(){
    var $zip =  $('#zip').val();
    var $op = $('<option>').text($zip).val($zip);
    $('#dropDown').append($op);
  }

  function cams(){
    var selectedZip = $('#dropDown option:selected').val();
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/webcams/q/'+selectedZip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var cams = data.webcams;
    _.map(cams, function(cam){
      var img = cam.CURRENTIMAGEURL;
      var city = cam.city;
      var imgTag = $('<img src="'+img+'">');
      var h4Tag = $('<h4>').text(city);
      $('#display').append(imgTag, h4Tag);
    });

  }

})();
