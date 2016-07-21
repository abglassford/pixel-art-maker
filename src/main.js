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

  function newPallete() {
    var paint;
    var pallete = $('#pallete');
    var colors = ['pink', 'purple', 'LimeGreen', 'black', 'white', 'yellow', 'red', 'blue']

    for (var i = 0; i < colors.length; i++) {
      pallete.append($('<div class="paint ' + colors[i] + '"></div>'));
      $('.' + colors[i]).css('background-color', colors[i])
    }
  }
  newPallete();
  var color

  $('.pixel').on('click', function(e){
    $(this).css('background-color', color);
  })

  $('.paint').on('click', function(e){
    color = $(this).css('background-color')
  })


});
