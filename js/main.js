$(document).ready(function () {


    $('.dropdown-trigger').dropdown({});

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 70) {
            $('.wrap-header').addClass('fix-nav');
        } else {
            $('.wrap-header').removeClass('fix-nav');
        }
    });

    var $menuIcon = $('.js-wrap-menu-icon'),
        $body = $('body'),
        $menuList = $('.js-wrap-menu');

    // перемотка из панели навигации к блоку + откуртие бутера

    $(function () {

        $('.scroll_block').click(function () {

            $body.removeClass('fixed');
            $menuList.removeClass('open-menu');
            $menuIcon.removeClass('open');

            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({scrollTop: $(scroll_el).offset().top - 76}, 1200);
            }
            return false;
        });

        $menuIcon.on('click', function () {
            $(this).toggleClass('open');

            if ($menuIcon.hasClass('open')) {
                $body.addClass('fixed');
                $menuList.addClass('open-menu');
            } else {
                $body.removeClass('fixed');
                $menuList.removeClass('open-menu');
            }
        });
    });

    // закртие меню при клике в пустую область на мобилке

    $(document).on('click', function (e) {
        var element = $(e.target);
        var elementClass = element.closest('.menu-burger').attr('class');
        if (elementClass !== undefined && elementClass.trim() === "menu-burger") return;
        if (element.closest('.js-wrap-menu').attr('class') !== undefined) return;
        if ($('body').hasClass('fixed')) {
            $('.wrap-menu-icon').removeClass('open');
            $body.removeClass('fixed');
            $menuList.removeClass('open-menu');
        }
    });

    $('.js-success').on('click', function () {

        $('.success-form').show();
    });


});
