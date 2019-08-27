$( document ).ready(function() {

    /*header active nav*/
    var currentPage = document.location.href;

    $('.nav > a').each(function(indx, el){
           if (currentPage.indexOf($(this).attr('href')) >= 0) {
               $(this).addClass('active');
           } else {
               $(this).removeClass('active');
           }
        }
    );

    /*index widget button*/
    $('.widget').hover(
        function () {
            $(this).find('.button-to-product').fadeIn();
    },
        function () {
            $(this).find('.button-to-product').fadeOut();
        }
    );

    /*all popup-cart open*/
    $('.cart-icon').on("click", function() {
        $('.popup-cart-header img').animate({  borderSpacing: 0 }, {
            step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        },'linear');

        showMyCart();

        $('.popup-cart-base').fadeIn();
    });
    $('.cart-count').on("click", function() {
        $('.popup-cart-header img').animate({  borderSpacing: 0 }, {
            step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'slow'
        },'linear');

        showMyCart();

        $('.popup-cart-base').fadeIn();
    });
    $('.popup-cart-header img').on("click", function() {
        $(this).animate({  borderSpacing: -90 }, {
            step: function(now,fx) {
                $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'normal'
        },'linear');

        $('.popup-cart-base').fadeOut();
        $('#popup-cart-items').empty();
    });

    /*shop product-item button*/
    $('.product-item').hover (
        function () {
            $(this).find('.product-item-button').fadeIn();
        },
        function () {
            $(this).find('.product-item-button').fadeOut();
        }
    );

    /*shop popup-product-item open*/
    $('.product-item-button').on("click", function() {
        /*запрос на описание товара*/
        var product_id = $(this).parent().parent().attr('id');
        $.ajax({
            url: "request.php?action=product_request", type: "post", dataType: "json", data: {"product_id": product_id},
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    $('.popup-product').attr({id: product_id});
                    $('#popup-product-image').attr( {src: "img/" + data[i].image });
                    $('#popup-product-image-full').attr( {src: "img/" + data[i].full_image });
                    $('#popup-product-name').text(data[i].name);
                    $('#popup-product-article').text("Артикул: " + data[i].article);
                    if (data[i].discount > 0) {
                        $('#popup-product-price').clone().removeAttr('id').insertBefore($('#popup-product-price')).addClass('popup-product-price-old').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                        data[i].price = data[i].price - (data[i].price / 100 * data[i].discount);
                    }
                    $('#popup-product-price').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                    $('#popup-product-href').attr({href: "product.php?id="+product_id});
                }
            }
        })
        /**/
        $('.popup-product-base').fadeIn();
    });
    $('.popup-product-close-button').on("click", function() {
        $('.popup-product-base').fadeOut();
    });

    /*index popup-product-item open*/
    $('.button-to-product').on("click", function() {
        /*запрос на описание товара*/
        var product_id = $(this).parent().attr('id');
        $.ajax({
            url: "request.php?action=product_request", type: "post", dataType: "json", data: {"product_id": product_id},
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    $('.popup-product').attr({id: product_id});
                    $('#popup-product-image').attr( {src: "img/" + data[i].image });
                    $('#popup-product-image-full').attr( {src: "img/" + data[i].full_image });
                    $('#popup-product-name').text(data[i].name);
                    $('#popup-product-article').text("Артикул: " + data[i].article);
                    if (data[i].discount > 0) {
                        $('#popup-product-price').clone().removeAttr('id').insertBefore($('#popup-product-price')).addClass('popup-product-price-old').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                        data[i].price = data[i].price - (data[i].price / 100 * data[i].discount);
                    }
                    $('#popup-product-price').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                    $('#popup-product-href').attr({href: "product.php?id="+product_id});
                }
            }
        })
        /**/
        $('.popup-product-base').fadeIn();
    });

    /*cart popup-product-item open */
    $('.cart-item-image').on("click", function() {
        /*запрос на описание товара*/
        var product_id = $(this).parent().parent().attr('id');
        $.ajax({
            url: "request.php?action=product_request", type: "post", dataType: "json", data: {"product_id": product_id},
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    $('.popup-product').attr({id: product_id});
                    $('#popup-product-image').attr( {src: "img/" + data[i].image });
                    $('#popup-product-image-full').attr( {src: "img/" + data[i].full_image });
                    $('#popup-product-name').text(data[i].name);
                    $('#popup-product-article').text("Артикул: " + data[i].article);
                    if (data[i].discount > 0) {
                        $('#popup-product-price').clone().removeAttr('id').insertBefore($('#popup-product-price')).addClass('popup-product-price-old').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                        data[i].price = data[i].price - (data[i].price / 100 * data[i].discount);
                    }
                    $('#popup-product-price').text("BYN " + number_format(data[i].price, 2, '.', ' '));
                    $('#popup-product-href').attr({href: "product.php?id="+product_id});
                }
            }
        })
        /**/
        $('.popup-product-base').fadeIn();
    });
    /*popup-product input*/

    $('.product-input-arrow-up').click(function () {
        var num =  $( this ).parent().parent().find('#product-input').val();
        $( this ).parent().parent().find('#product-input').val(Number.parseInt(num)+1);
    });

    $('.product-input-arrow-down').click(function () {
        var num =  $( this ).parent().parent().find('#product-input').val();
        if (Number.parseInt(num) > 1) {
            $(this).parent().parent().find('#product-input').val(Number.parseInt(num) - 1);
        }
    });

    /*cart input*/

    $('.cart-input-arrow-up').click(function () {
        var num =  $( this ).parent().parent().find('#cart-input').val();
        $( this ).parent().parent().find('#cart-input').val(Number.parseInt(num)+1);
    });

    $('.cart-input-arrow-down').click(function () {
        var num =  $( this ).parent().parent().find('#cart-input').val();
        if (Number.parseInt(num) > 1) {
            $(this).parent().parent().find('#cart-input').val(Number.parseInt(num) - 1);
        }
    });
    /**/

    $('.product-add-button').click(function () {
        var id = $( this).parent().parent().attr('id');
        var count = $( this).parent().parent().find('#product-input').val();
        addToCart(id, count);
    });

    $('.popup-product-add-button').click(function () {
        var id = $( this).parent().parent().attr('id');
        var count = $( this).parent().parent().find('#product-input').val();
        addToCart(id, count);
    });

    $('.cart-item-delete-from-cart').click(function () {
        var id = $( this).parent().parent().attr('id');
        var el = $( this).parent().parent();
        deleteFromCart(id, el);
    });


    /*Product*/
    $('.button-show-more').on("click", function() {
        $('.product-view').removeClass('product-short-view');
        $( this).addClass('button-hidden');
        $('.button-show-less').removeClass('button-hidden');
    });
    $('.button-show-less').on("click", function() {
        $('.product-view').addClass('product-short-view');
        $( this).addClass('button-hidden');
        $('.button-show-more').removeClass('button-hidden');
    });

    /*FAQ*/
    $('.button-faq-show').on("click", function() {
        $(this).addClass("button-hidden");
        $(this).next('.button-faq-hide').removeClass("button-hidden");
        $(this).parent().next('.faq-item-content').fadeIn( 100 );
    });
    $('.button-faq-hide').on("click", function() {
        $(this).addClass("button-hidden");
        $(this).prev('.button-faq-show').removeClass("button-hidden");
        $(this).parent().next('.faq-item-content').fadeOut(100);
    });

});


function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function addToCart(id, count) {
    $.ajax({
        async: false,
        type: "POST",
        url: "request.php",
        dataType: "text",
        data: 'action=add&id=' + id + '&count=' +count,
        error: function (){
            alert( "Не удалось добавить");
        },
        success: function (totalAmount){
             alert( "Товар добавлен");
            $('.cart-count').text(totalAmount);
        },
    });
}

function deleteFromCart(id, el) {
    $.ajax({
        async: false,
        type: "POST",
        url: "request.php",
        dataType: "text",
        data: 'action=delete&id=' + id,
        error: function (){
            alert( "Не удалось удалить");
        },
        success: function (totalAmount){
            alert( "Товар удален");
            $('.cart-count').text(totalAmount);
            el.remove();
        },
    });
}


function showMyCart() {

    $.ajax({
        async: false,
        type: "POST",
        url: "request.php",
        dataType: "text",
        data: 'action=show',
        error: function (){
            //alert( "Не удалось добавить");
        },
        success: function (response){
               $('#popup-cart-items').append(response);
            }
        });

    $('.popup-cart-footer-total-cost').text("BYN " + $('#popup-cart-items').find('.popup-cart-item-total-cost:last-child').text());
};

$(function(){
    $(document).on("click", ".popup-cart-item-button-delete", function(e) {
        var id = $(this).parent().attr('id');
        var el= $(this).parent();
        deleteFromCart(id, el);
    });
});

