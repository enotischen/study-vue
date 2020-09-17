$(function () {
    $('.single-item').slick();
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
