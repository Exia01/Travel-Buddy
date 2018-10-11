$('#ajax_load').click(function() {
    console.log("Loading Data ...");
    $.ajax({
      method: 'GET',
      url: 'all_html',
      data: $(this).serialize(),
      success: function(data) {
        // console.log('Success: ', data);
        for (let dInfo of Object.keys(data)) {
              $("#placeholder1").append(`<p>${data[dInfo]}</p>`)
          }
        $('#placeholder1').html(data)
      }
    });
  });
  // $('.form_container').hide();
  // $('#add_trip_btn').click(function() {
  //   console.log("add trip form toggled");
  //   $('.form_container').slideToggle("blind");
  // });
  $('#ajax_btn').click(function() {
    console.log("ajax button clicked");
    $.ajax({
      url: 'travels/ajax',
      success: function(serverResponse) {
        console.log("success, Server Response: ", serverResponse);
      }
    })
  });
  $('#create_user_ajax_form').submit(function(e) {
    e.preventDefault();
    console.log("ajax form submission");
    $.ajax({
      url: $(this).attr('action'),
      method: 'post',
      // data: { the_post : $('#post-text').val() }, // data sent with the post request
      data: $(this).serialize(),
      success: function(serverResponse) {
        console.log("success, Server Response: ", serverResponse);
        $('#placeholder1').html(serverResponse)
      }
    })
  })
  $('#button_json').click(function(){
    $.ajax({
          url: 'all.json', /* Where should this go? */
          success: function(serverResponse) {  /* What code should we run when the server responds? */
            console.log("Received this from server:", serverResponse)
            console.log("Now, I can use the serverResponse to manipulate the DOM")
            $('#placeholder1').html(JSON.stringify(serverResponse))
          }
      });
  });
  $('#button_html').click(function(){
    $.ajax({
            url: 'all_html', /* Where should this go? */
            success: function(serverResponse) {  /* What code should we run when the server responds? */
              console.log("Received this from server:", serverResponse)
              $('#placeholder1').html(serverResponse)
            }
        });
    });
});
</script>