/**
 * Created by #Hosam on 02/12/2016.
 */
$(function() {

    $(window).on('scroll', function() {
        let topScroll = $(window).scrollTop();

        $('#meter').meter();
    });

});