// // اسکرول را گوش کنید
// window.addEventListener('scroll', function() {
//     // ارتفاع اسکرول شده را دریافت کنید
//     var scrollPosition = window.scrollY;
  
//     // منوی ثابت
//     var fixedMenu = document.getElementById('fixed-menu');
  
//     // اگر اسکرول به اندازه کافی پایین رفته باشد، منو را فیکس کنید
//     if (scrollPosition > 50) {
//       fixedMenu.style.backgroundColor = '#555'; // تغییرات رنگ می‌تواند به سلیقه شما باشد
//     } else {
//       fixedMenu.style.backgroundColor = '#333'; // رنگ اصلی منو
//     }
//   });

// animate for i tag when hover ___Start___
function menuHover(a) {
    var type = a;
    switch (type){
        case 'shirt':
            document.querySelector('.fa-shirt').classList.add('fa-bounce');
            break;

        case 'shoe':
            document.querySelector('.fa-shoe-prints').classList.add('fa-bounce');
            break;

        case 'clock':
            document.querySelector('.fa-clock').classList.add('fa-bounce');
            break;

        case 'ring':
            document.querySelector('.fa-ring').classList.add('fa-bounce');
            break;

        case 'glasses':
            document.querySelector('.fa-glasses').classList.add('fa-bounce');
            break;
    };
};

function menuBlur(a){
    var type = a;
    switch (type){
        case 'shirt':
            document.querySelector('.fa-shirt').classList.remove('fa-bounce');
            break;

        case 'shoe':
            document.querySelector('.fa-shoe-prints').classList.remove('fa-bounce');
            break;

        case 'clock':
            document.querySelector('.fa-clock').classList.remove('fa-bounce');
            break;

        case 'ring':
            document.querySelector('.fa-ring').classList.remove('fa-bounce');
            break;

        case 'glasses':
            document.querySelector('.fa-glasses').classList.remove('fa-bounce');
            break;
    };
}
// animate for i tag when hover ___End___