define([], function () {
  'use strict';

  var hello = (function () {
    var skroll;

    var init = function () {
      console.log('hello');

      require([
        'skrollr'
      ], function (skrollr) {
        skroll = skrollr.init({
          forceHeight:      false,
          smoothScrolling:  false
        });

        if (skroll.isMobile()) {
          skroll.destroy();
        }
      });
    };

    var destroy = function () {
      skroll.destroy();
    };

    return {
      path:     'modules/hello',
      destroy:  destroy,
      init:     init
    };
  })();

  return hello;
});
