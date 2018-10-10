$(document).ready(function () {



    function time() {
        setTimeout(function () {
            $('.form_container').slideToggle("swing");
        }, 2000);
    }




    /* Enables the csrftoken */
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie != '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    let csrftoken = getCookie('csrftoken');
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
            // console.log(`This is from the settings inside ajax set up ${settings}`)
        }
    });

    $('.form_container').hide();
    $('#add_trip_btn').click(function () {
        $('.form_container').slideToggle("swing");
    });
    /* Listener to see if it works  */
    $("#dest").change(function () {
        console.log($(this).val());
    });


    $('#add_trip_ajax_form').submit(function (e) {
        e.preventDefault(e);
        console.log('Working')
        let info = {
            location: $('#dest').val(),
            description: $('#descript').val(),
            start_date: $('#start_datepicker').val(),
            end_date: $('#end_datepicker').val(),
        }

        $.ajax({
            async: true,
            url: $(this).attr('action'),
            method: 'post',
            /* Setting 'data' manually but no choice; could not find an alternative */
            data: {
                location: $('#dest').val(),
                description: $('#descript').val(),
                start_date: $('#start_datepicker').val(),
                end_date: $('#end_datepicker').val(),
            },
            success: function (data) {
                for (let dInfo of Object.keys(info)) {
                    $("#placeholder3").append(`<p>${info[dInfo]}</p>`)
                }
                time()
                $("form").trigger("reset");

            },
            error: function (err, data) {
                console.log(data)
                alert("Error " + err.responseText);
            }
        })
    })

    // $("#add_trip_ajax_form").click(function () {
    //     $("form").trigger("reset");
    // });


});