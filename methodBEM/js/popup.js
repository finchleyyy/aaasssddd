//  открытие окна окна записи
// $('.open-popup').click(function () {
//     $('.popup-bg').fadeIn(600);
// });
// // закрытие окна записи
// $('.close-popup').click(function () {
//     $('.popup-bg').fadeOut(600);
// });

// ! форма записи и выбора клуба
$('.open-popup').click(function (e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});
// ! форма просмотра карты
$('.open-map').click(function (e) {
    e.preventDefault();
    $('.popup-map').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-map').click(function () {
    $('.popup-map').fadeOut(800);
    $('html').removeClass('no-scroll');
});
