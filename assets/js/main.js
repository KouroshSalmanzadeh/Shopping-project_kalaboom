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

// animate for i tag when hover ___Strat___
function menuHover(a) {
    var type = a;
    switch (type) {
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

function menuBlur(a) {
    var type = a;
    switch (type) {
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


// reveal and active for boxs ___Start___
function revealTop() {
    var reveals = document.querySelectorAll('.reveal-top');

    for (i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 70;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active-top');
        } else {
            reveals[i].classList.remove('active-top');
        };
    };
};


function revealRight() {
    var reveals = document.querySelectorAll('.reveal-right');

    for (i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 70;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active-right');
        } else {
            reveals[i].classList.remove('active-right');
        };
    };
};


function revealLeft() {
    var reveals = document.querySelectorAll('.reveal-left');

    for (i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 70;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active-left');
        } else {
            reveals[i].classList.remove('active-left');
        };
    };
};

window.addEventListener("scroll", function () {
    const myTimeout = setTimeout(revealTop, 1000);

});
window.addEventListener("DOMContentLoaded", function () {
    const myTimeout = setTimeout(revealTop, 700);
});

window.addEventListener("scroll", revealRight);
window.addEventListener("DOMContentLoaded", revealRight);

window.addEventListener("scroll", function () {
    const myTimeout = setTimeout(revealLeft, 1200);

});
window.addEventListener("DOMContentLoaded", function () {
    const myTimeout = setTimeout(revealLeft, 1225);

});
// reveal and active for boxs ___End___


// hide and show logo when search box is focus __Satrt__
function hideWithSearchbox() {
    document.querySelector('.menu').classList.add('hide-for-search');
    document.querySelector('.menu').classList.remove('show-for-search');
}

function showWithSearchbox() {
    document.querySelector('.menu').classList.remove('hide-for-search');
    document.querySelector('.menu').classList.add('show-for-search');
}
// hide and show logo when search box is focus __End__


// Login Button and Sign up __Start__
function buttonHoverLogin(buttonNum) {
    // debugger
    switch (buttonNum) {
        case 'button1':
            document.querySelector('.button2').classList.add('hide-button');
            document.querySelector('.button1').classList.add('active-button');
            break;

        case 'button2':
            document.querySelector('.button1').classList.add('hide-button');
            document.querySelector('.button2').classList.add('active-button');
            break;
    }
}

function buttonBlurLogin(buttonNum) {
    switch (buttonNum) {
        case 'button1':
            document.querySelector('.button1').classList.remove('active-button');
            document.querySelector('.button2').classList.remove('hide-button');
            break;

        case 'button2':
            document.querySelector('.button2').classList.remove('active-button');
            document.querySelector('.button1').classList.remove('hide-button');
            break;
    }
}
// Login Button and Sign up __End__

// Tooltip show __Start__
function showTooltip() {
    document.querySelector('.button-shop').classList.add('active-shopping-button');
    document.getElementById('fa-cart-shopping').style.color = "#fff";
}

function hideTooltip() {
    document.querySelector('.button-shop').classList.remove('active-shopping-button');
    document.getElementById('fa-cart-shopping').style.color = "#ff9191";
}
// Tooltip show __End__



// Dark mode __Satrt__
const toggleSwitch = document.getElementById('mode-toggle');

var lightColorItems = document.querySelectorAll('.light-theme-color');
var logo = document.querySelector('.logo-img');
var header = document.querySelector('header');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');
var searchBox = document.querySelector('.search');

function switchTheme() {
    if (toggleSwitch.checked) {

        function setLight() {
            body.classList.add('white-back-color');
            menu.classList.add('grey-back-color');
            header.classList.add('grey-back-color');
            logo.src = "assets/img/logo/logo22-removebg-preview.png";
            // logo.style.transition = "all 2.5s ease 3s";
            header.classList.add('box-shadow-header');
            searchBox.classList.remove('box-shadow-search-box');

            for (i = 0; i < lightColorItems.length; i++) {
                lightColorItems[i].classList.add('black-color');
            }
        }
        setLight();
    } else {

        function setDark() {
            body.classList.remove('white-back-color');
            header.classList.remove('grey-back-color');
            logo.src = "assets/img/logo/logo 22.1.png";
            menu.classList.remove('grey-back-color');
            header.classList.remove('box-shadow-header');
            searchBox.classList.add('box-shadow-search-box');

            for (i = 0; i < lightColorItems.length; i++) {
                lightColorItems[i].classList.remove('black-color');
            }
        }
        setDark();
    }
}

toggleSwitch.addEventListener('change', switchTheme);
// Dark mode __End__