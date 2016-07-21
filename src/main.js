$(function() {
  'use strict';

  function newCanvas() {
    var pixel;
    var canvas = $('#canvas');

    for (var i = 0; i < 2805; i++) {
      canvas.append($('<div class="pixel"></div>'));
    }
  }
  newCanvas();

  function newPallate() {
    var paint;
    var pallete = $('#pallete');
    var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'violet']

    for (var i = 0; i < 6; i++) {
      pallete.append($('<div class="paint ' + colors[i] + '"></div>'));
    }
  }
  newPallate();
  var color
  
  $('.pixel').on('click', function(e){
    $(this).css('background-color', color);
  })

  $('.paint').on('click', function(e){
    color = $(this).css('background-color')
  })


});
