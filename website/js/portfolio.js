/* global $, swal*/
$(document).ready(function() {
    console.log("portfolio.js!");

    var form = {};
    form.name = $("#name");
    form.email = $("#email");
    form.message = $("#message");
    var submitBtn = $("#submit");

    var clearForm = function() {
        form.name.val('');
        form.email.val('');
        form.message.val('');
    };

    submitBtn.click(function(e) {
        e.preventDefault();
        var name = form.name.val();
        var email = form.email.val();
        var message = form.message.val();

        var emailData = {
            "name": name,
            "email": email,
            "message": message
        };

        console.log(name + " " + email + " " + message + " ");
        if (name != "" && email != "" && message != "") {
            /* Send contact info to the server through a post request */
            $.ajax({
                url: "/",
                method: "POST",
                type: 'json',
                data: emailData,
                crossDomain: true
            }).done(function(data) {
                clearForm();
                if (data == "Success") {
                    swal({
                        title: 'Thank you for contacting me!',
                        text: 'I will respond in a timely manner!',
                        type: 'success',
                        timer: 3000,
                    });
                }
                else {
                    swal(
                        'Problem with the server!',
                        'Please try again!',
                        'error'
                    );
                }
            });
        }
        else {
            swal(
                'OOPS',
                'Please fill in all the required fields!',
                'error'
            );
        }
    });

    /* Scrolls to the anchor tag slowly */
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    AOS.init();

    /**
     * Function that preloads the images into the cache when the page loads.
     * @function
     * @param {array} array - The array of images to be preloaded on the page.
     * @module atm js
     */
    var preloadImages = function(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            };
            list.push(img);
            img.src = array[i];
        }
    };

    preloadImages([
        "/img/project-images/ascii.png",
        "/img/project-images/atm.png",
        "/img/project-images/attendia.png",
        "/img/project-images/atterholt.png",
        "/img/project-images/blog.png",
        "/img/project-images/bugz.png",
        "/img/project-images/extension.png",
        "/img/project-images/mss.png",
        "/img/project-images/NPEIV.png",
        "/img/project-images/pebble.png",
        "/img/project-images/portfolio.png",
        "/img/project-images/psd.png",
        "/img/project-images/pulsepay.png",
        "/img/project-images/resume.png",
        "/img/project-images/simple.png",
        "/img/project-images/slidemaster.png",
        "/img/project-images/template.png"
    ]);
    

    
});
