define([], function () {
  'use strict';

  var transition = (function() {
    var transitioning, currentModule, localPush, $body, $window, $document, $wrapper, $wrapperClone, $clone, $preloader, $cover;

    var init = function(module) {
      
      currentModule = module;
      transitioning = false;
      $body         = $('body');
      $window       = $(window);
      $document     = $(document);
      $wrapper      = $('.menu__wrapper');
      $wrapperClone = $('.menu__wrapper--clone');
      $preloader    = $('.preloader');
      $cover        = $('.cover');

      // Ajax links
      $document.on('click', '.ajax', function(e){
        e.preventDefault();

        if (!transitioning) {
          localPush = true;
          transitionTo($(this).attr('href'));
        }
      });

      // Browser backand forward buttons
      $window.on('statechange', function() {
        var state = History.getState();

        if (localPush) {
          localPush = false;
        }

        else {
          localPush = false;
          window.location.href = state.url;
        }
      });
    };

    var transitionTo = function(nextUrl) {
      transitioning = true;

      // Menu on index
      if (currentModule) {
        if (currentModule.path === 'modules/index') {
          if (getSection(nextUrl)) {
            scrollTo($('#' + getSection(nextUrl)));

            // Add to History
            History.pushState(null, null, nextUrl);
            transitioning = false;

            return false;
          }
        }
      }
      
      // Load new page
      $wrapperClone.load(nextUrl + ' #skrollr-body', function(data) {    
        if ($window.width() <= 767) {
          $preloader.css('width', 0);
          $preloader.css('height', 3);
        }    

        else {
          $preloader.css('width', 1);
          $preloader.css('height', 0);
        } 

        // Load images
        $wrapperClone.find('.section--showcase, .section--brief').imagesLoaded({background: true})
          .done(function(instance) {
            if ($window.width() <= 767) {
              $preloader.css('width', $window.width()).delay(1000).fadeOut();
            }    

            else {
              $preloader.css('height', $window.height()).delay(1000).fadeOut();
            }

            $cover.fadeIn(function() {
              // Scroll to the top
              window.scrollTo(0, 0);

              // Destroy previous page
              if (currentModule) {
                currentModule.destroy();
              }

              // Clone content
              $wrapper.empty();
              $clone = $wrapperClone.clone(true).contents().unwrap();
              $wrapper.html($clone);
              $wrapperClone.empty();
              $cover.delay(500).fadeOut('slow');

              // Load new modules
              var nextModule = $clone.find($('#content')).attr('data-start');

              if (nextModule) {            
                require([nextModule], function (nextModule) {
                  console.log('load ' + nextModule.path);
                  nextModule.init();
                  currentModule = nextModule;
                });
              }

              else {
                currentModule = null;
              }

              transitioning = false;
            });
          })
          .progress(function(instance, image) {
            if ($window.width() <= 767) {
              $preloader.fadeIn().css('width', $preloader.width() + 25);
            }    

            else {
              $preloader.fadeIn().css('height', $preloader.height() + 50);
            }
        });

        // Add to History
        History.pushState(null, $(data).filter('title').text(), nextUrl);
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

    return {
      path: 'modules/transition',
      init: init
    };
  })();

  return transition;
});
