$(document).ready(function() {
  var $modalOpener = $('.modal-opener');
  var $globalMenu = $('#global-menu');
  var $aboutusMenu = $('#aboutus-menu');
  $('#global-menu-opener').on('click', function(e) {
    e.preventDefault();
    $globalMenu.sidebar('toggle');
  });

  $('#aboutus-menu-opener').on('click', function(e) {
    e.preventDefault();
    $aboutusMenu.sidebar('toggle');
  });

  $modalOpener.on('click', function() {
    $('.ui.modal').modal('show');
  });

  // Highlight.js
  hljs.initHighlightingOnLoad();
});