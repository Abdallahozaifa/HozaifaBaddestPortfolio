define([], function () {
  'use strict';

  var menu = (function() {
    var init = function() {
      var $document     = $(document);
      var $menu         = $('.menu');
      var $menuWrapper  = $('.menu__wrapper');
      
      $document.on('click', '.menu__toggle', function(e) {
        e.preventDefault();
        $menu.toggleClass('menu--is-active');
        $menuWrapper.toggleClass('menu--is-active');
      });

      $document.on('click', '#content', function(e) {
        $menu.removeClass('menu--is-active');
        $menuWrapper.removeClass('menu--is-active');
      });
    };

    return {
      init: init
    };
  })();

  return menu;
});