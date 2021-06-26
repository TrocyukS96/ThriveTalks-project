$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header__novigation').toggleClass('active');
      $('body').toggleClass('lock');
   });
});



const animItems = document.querySelectorAll('.anim-items'); //найти и обьявитть в переменную все обьекты которые будут поддаватсья анимации

if (animItems.length > 0) {        //проверить, существуют ли такие классы
    window.addEventListener('scroll', animOnScroll); //создаем событие при котором наша функция будет выполняться, событие при скролле

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {  // получаем в переменную animItem каждый из полученных элементов массива
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; //получить высоту обьекта
            const animItemOffset = offset(animItem).top;  //хочу получить позицию элемента относительно верха
            const animStart = 4; //коэцициент, который будет регулировать момент старта анимации

            let animItemPoint = window.innerHeight - animItemHeight / animStart;  //настройка момента старта анимации
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active'); //чтобы повторно не анимировать обьект
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
    //нужно обьявить функцию изначально, когда наш обьект изначально находиться в видимой части
}

//innerHeight - высота окна браузера
//animItemHeight - высота обьекта который анимируется
//переменная pageXOffset - в которую поступают данные о количесвте проскролленны пикселей
