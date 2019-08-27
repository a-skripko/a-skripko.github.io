$( document ).ready(function() {

    $("#popup-product-image-wrapper").hover(
        function () {

            $('.search-icon').addClass('search-icon-hidden');
            $("#popup-product-image-full").css({'opacity': '1'});
            $("#popup-product-image").css({'opacity': '0'});
        },
        function () {
            $('.search-icon').removeClass('search-icon-hidden');
            $("#popup-product-image-full").css({'opacity': '0'});
            $("#popup-product-image").css({'opacity': '1'});
        }
    );

    $("#popup-product-image-wrapper").on('mousemove', function(el){

        let x = el.pageX;
        let y = el.pageY;

        let offx = $( this ).offset().left;
        let offy = $( this ).offset().top;

        let kX = $('#popup-product-image-full').width() / 500;
        let kY = $('#popup-product-image-full').height() / 500;

        $( '#popup-product-image-full' ).animate({
            'left': ((x - offx) * (-1) * kX)/1.4 + 'px',
            'top': ((y - offy) * (-1) * kY)/1.4 + 'px'
        }, 0);

        }
    );

});