(function () {
  'use strict';

  require.config({
    baseUrl: './js/',
    paths: {
      // Libraries
      'jquery': [
        'lib/jquery.min',
        'https://code.jquery.com/jquery-2.0.3.min.js'
      ],
      'easing':         'lib/jquery.easing.min',
      'typekit':        'lib/typekit',
      'history':        'lib/jquery.history.min',
      'skrollr':        'lib/skrollr.min',
      'imagesLoaded':   'lib/imagesloaded.min',
      'twitter':        'https://platform.twitter.com/widgets',
      'transition':     'modules/transition',
      'menu':           'modules/menu',

      // Modules
      'hello':          'modules/hello',
      'contact':        'modules/contact',
      'bigheadmode':    'modules/bigheadmode',
      'foodsters':      'modules/foodsters',
      'keno':           'modules/keno',
      'webdirections':  'modules/webdirections',
    },

    shim: {
      // Libraries
      'jquery': {
        exports: '$'
      },
      'easing': {
        deps: ['jquery']
      },
      'history': {
        deps: ['jquery']
      },
      'imagesLoaded': {
        deps: ['jquery']
      },
      'transition': {
        deps: ['jquery', 'history', 'imagesLoaded']
      },
      'twitter': {
        deps: ['jquery']
      },
      'skrollr': {
        deps: ['jquery']
      },
      'menu': {
        deps: ['jquery']
      },
      'hello': {
        deps: ['jquery', 'skrollr']
      },
      'contact': {
        deps: ['jquery']
      },
      'bigheadmode': {
        deps: ['jquery', 'skrollr']
      },
      'foodsters': {
        deps: ['jquery', 'skrollr']
      },
      'keno': {
        deps: ['jquery']
      },
      'webdirections': {
        deps: ['jquery']
      }
    }
  });

  require([
    'menu',
    'transition',
    'typekit',
    'jquery',
    'easing'
  ],

  function (menu, transition) {
    // Global modules
    menu.init();

    // Page specific module
    var nextModule = $('#content').attr('data-start');

    if (nextModule) {
      require([nextModule], function (nextModule) {
        nextModule.init();
        transition.init(nextModule);
      });
    }

    else {
      transition.init(false);
    }
  })
}());
