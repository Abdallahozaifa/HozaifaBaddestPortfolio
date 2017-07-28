define([], function () {
  'use strict';
  
  var contact = (function() {
    var init = function() {
      console.log('contact');
      
      var formSubmitted = false;
      var $form = $('#contact-form');
      var $formError = $form.find('.form__error');
      
      $form.submit(function(e) {
        e.preventDefault();

        if (formSubmitted === false) {
          formSubmitted = true;

          $.ajax({
              type: 'post',
              url: 'includes/mailer',
              data: $form.serialize(),

              success: function(data) {
                console.log(data);
                
                if (data === 'true') {
                  $formError.html('Thanks for the message. I\'ll get back to you asap.').hide().fadeIn();
                  $form.find('button').fadeOut();
                } 

                else {
                  $formError.html('Please check that all the fields are filled in correctly.').hide().fadeIn();
                }

                formSubmitted = false;
              },

              error: function(data) {
                $formError.html('There was an error in submitting the contact form.').hide().fadeIn();
              }
          });

          return false;
        }

        return false;
      });
    };

    var destroy = function() {

    };

    return {
        path:     'modules/contact',
        destroy:  destroy,
        init:     init
    };
  })();
  return contact;
});
