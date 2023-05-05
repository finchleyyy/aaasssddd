// alert("иди нахуй");

// Когда пользователь прокручивает вниз 40px от верхней части документа, сдвиньте вниз навигационная панель
// Когда пользователь прокручивает страницу до верха, сдвиньте ее вверх. navbar (60px из вида сверху)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}