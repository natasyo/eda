// Слайдер товаров главной страницы
$(".tab-pane.active .menu-rest__products")
    .not(".slick-slider")
    .slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: "<button class='slick-prev slick-arrow'><img src='images/left.png'/></button>",
        nextArrow: "<button class='slick-next slick-arrow'><img src='images/right.png'/></button>",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    variableWidth: $(window).width() < 768 ? true : false
                }
            },
            {
                breakpoint: 566,
                settings: {
                    arrows: false,
                    variableWidth: $(window).width() < 768 ? true : false
                }
            }
        ]
    });

$(".nav-tabs a").on("shown.bs.tab", function(event) {
    $(".tab-pane.active .menu-rest__products")
        .not(".slick-slider")
        .slick({
            slidesToShow: 4,
            slidesToScroll: 3,
            prevArrow: "<button class='slick-prev slick-arrow'><img src='images/left.png'/></button>",
            nextArrow: "<button class='slick-next slick-arrow'><img src='images/right.png'/></button>",
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        variableWidth: $(window).width() < 768 ? true : false
                    }
                },
                {
                    breakpoint: 566,
                    settings: {
                        arrows: false,
                        variableWidth: $(window).width() < 768 ? true : false
                    }
                }
            ]
        });
});

if ($(window).width() < 768) {
    $(".discounts__row").slick({
        arrows: false,
        variableWidth: true,
        slidesToShow: 1
    });
    $(".causes__row ").slick({
        arrows: false,

        slidesToShow: 1,
        dots: true
    });
}
// Показ мобильного меню
$(".bottom-menu__menu").click(function(e) {
    e.preventDefault();
    $(".footer__nav").toggleClass("footer__nav_show");
});
// Закрепление категорий внизу страницы
var position = $(".catalog__nav").offset().top;
var positionBasket = $(".basket-content").offset().top;
var navItem = $(".categories__name");
var i = 0;

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > position) {
        $(".catalog__nav").addClass("catalog__nav_bottom ");
    } else {
        $(".catalog__nav").removeClass("catalog__nav_bottom ");
    }
    if (scrollTop > positionBasket - 40) {
        $(".basket-content").addClass("basket-content_fixed");
    } else {
        $(".basket-content").removeClass("basket-content_fixed");
    }
    currentItem(scrollTop);
});

function currentItem(scroll) { //определение текущей позиции

    $.each(navItem, function(index, value) {
        var id = $(navItem[index]).attr('id');
        var nextId = $(navItem[index + 1]).attr('id')
        if (!nextId && $("#" + id).offset().top - 150 < scroll) {
            $("a[href^='#']").removeClass('catalog__nav_current');
            $("a[href^='#" + id + "']").addClass('catalog__nav_current');
            return;
        }
        if ($("#" + id).offset().top - 150 < scroll && $("#" + nextId).offset().top - 150 > scroll) {
            $("a[href^='#']").removeClass('catalog__nav_current');
            $("a[href^='#" + id + "']").addClass('catalog__nav_current');
            return;
        }
    });
}

// Открытие карточки товара
$('.menu-rest__product').click(function(e) {
    e.preventDefault();
    $(this).next('.menu-rest__modal').modal('show');
});