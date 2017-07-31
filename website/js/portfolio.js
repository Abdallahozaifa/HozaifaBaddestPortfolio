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

});
