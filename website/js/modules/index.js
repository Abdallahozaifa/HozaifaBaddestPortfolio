define([], function () {
  'use strict';

  var index = (function() {
    var loadedModules;

    var init = function() {
      loadedModules = [];

      require([
        'hello',
        'contact'
      ], function (hello, contact) {
        hello.init();
        contact.init();

        if (getSection(window.location.href)) {
          scrollTo($('#' + getSection(window.location.href)));
        }
        
        loadedModules.push(hello, contact);
      });
    };

    var scrollTo = function ($element) {
      var scrollTop = $element.position().top;

      if ($element.selector === '#contact') {
        scrollTop -= 75;
      }

      $('html, body').stop().animate({scrollTop: scrollTop}, 750, 'easeInOutCubic');
    };

    var getSection = function (url) {
      var name = 'section'.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

      var results = regex.exec(url);

      if (results) {
        return results[1];
      }

      return false;
    };

    var destroy = function () {
      for (var i in loadedModules) {
        loadedModules[i].destroy();
      }
    };

    return {
      path:     'modules/index',
      destroy:  destroy,
      init:     init
    };
  })();
  return index;
});
