/* jshint camelcase:false */

(function(){
  'use strict';

  function addZip(){
    var $zip =  $('#zip').val();
    var $op = $('<option>').text($zip).val($zip);
    $('#dropDown').append($op);
  }

  function receive(data){
    //debugger;
    console.log(data);
    var img1 = data.satellite.image_url;
    var img2 = data.satellite.image_url_ir4;
    var img3 = data.satellite.image_url_vis;
    var imgs = [img1, img2, img3];
    displayImgs(imgs);
  }

  function displayImgs(imgs){
    $.each(imgs, function(idx, img){
      var $img = $('<img src="'+img+'">');
      $('#tom').append($img);
    });
  }

  function getSatellite(){
    var zip = $('#dropDown option:selected').val();
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function init(){
    $('#addzip').click(addZip);
    $('#getImage').click(getSatellite);
  }

  $(document).ready(init);

})();
