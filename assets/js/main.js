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
function menuHover(type) {
    const targetClass = {
        // for mobile menu
        shirt: '.menu-mobile .fa-shirt',
        shoe: '.menu-mobile .fa-shoe-prints',
        clock: '.menu-mobile .fa-clock',
        ring: '.menu-mobile .fa-ring',
        glasses: '.menu-mobile .fa-glasses',

        // for desktop menu
        shirtDesk: '.menu .fa-shirt',
        shoeDesk: '.menu .fa-shoe-prints',
        clockDesk: '.menu .fa-clock',
        ringDesk: '.menu .fa-ring',
        glassesDesk: '.menu .fa-glasses',
    };

    document.querySelector(targetClass[type]).classList.add('fa-bounce');
}

function menuBlur(type) {
    const targetClass = {
        // for mobile menu
        shirt: '.menu-mobile .fa-shirt',
        shoe: '.menu-mobile .fa-shoe-prints',
        clock: '.menu-mobile .fa-clock',
        ring: '.menu-mobile .fa-ring',
        glasses: '.menu-mobile .fa-glasses',

        // for desktop menu
        shirtDesk: '.menu .fa-shirt',
        shoeDesk: '.menu .fa-shoe-prints',
        clockDesk: '.menu .fa-clock',
        ringDesk: '.menu .fa-ring',
        glassesDesk: '.menu .fa-glasses',
    };

    document.querySelector(targetClass[type]).classList.remove('fa-bounce');
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

// reveal top for app bar mobile ___Start___
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        var revealsAppBar = document.querySelectorAll('.box-app-bar');
        for (i = 0; i < revealsAppBar.length; i++) {
            revealsAppBar[i].classList.add('active-top');
        };
    }, 2000);
})
// reveal top for app bar mobile ___End___


// hide and show logo when search box is focus __Satrt__
var menu = document.querySelector('.menu');
setTimeout(() => {
    menu.style.background = "#202022";
}, 2000);

function hideWithSearchbox() {
    menu.classList.add('hide-for-search');
    menu.classList.remove('show-for-search');
}

function showWithSearchbox() {
    // menu.style.background = "none";
    menu.classList.remove('hide-for-search');
    menu.classList.add('show-for-search');
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
var logo = document.querySelectorAll('.logo-container');
var nav = document.querySelector('nav');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');
var searchBox = document.querySelector('.search');
var threeLineMenu = document.styleSheets[1].cssRules[22].cssRules[1];
var sideNav = document.querySelector(".side-nav");
var appBar = document.querySelector(".app-bar");
var menuMobileButton = document.querySelector(".container-menu-mobile button");
var menuMobileButtonA = document.querySelectorAll(".container-menu-mobile button a");

function switchTheme() {
    if (toggleSwitch.checked) {

        function setLight() {
            body.classList.add('white-back-color');
            nav.classList.add('grey-back-color');
            menu.classList.add('grey-back-color');
            nav.classList.add('box-shadow-header');
            appBar.classList.add("light-mode");
            threeLineMenu.style.background = "black";
            sideNav.classList.add("light-mode");
            for (i = 0; i < menuMobileButtonA.length; i++) {
                menuMobileButtonA[i].style.color = "black";
            }
            menuMobileButton.style.color = "black";

            searchBox.classList.remove('box-shadow-search-box');


            body.classList.remove("black-light-back-color");
            nav.classList.remove("black-back-color");
            menu.classList.remove("black-back-color");


            for (i = 0; i < logo.length; i++) {
                logo[i].classList.add("logo-light-mode");
                logo[i].classList.remove("logo-dark-mode");
            }

            for (i = 0; i < lightColorItems.length; i++) {
                lightColorItems[i].classList.add('black-color');
            }
        }
        setLight();
    } else {

        function setDark() {
            body.classList.add("black-light-back-color");
            nav.classList.add("black-back-color");
            menu.classList.add("black-back-color");
            searchBox.classList.add('box-shadow-search-box');
            threeLineMenu.style.background = "gainsboro";
            for (i = 0; i < menuMobileButtonA.length; i++) {
                menuMobileButtonA[i].style.color = "gainsboro";
            }
            menuMobileButton.style.color = "gainsboro";
            sideNav.classList.remove("light-mode");



            body.classList.remove('white-back-color');
            nav.classList.remove('grey-back-color');
            menu.classList.remove('grey-back-color');
            appBar.classList.remove("light-mode");
            nav.classList.remove('box-shadow-header');

            for (i = 0; i < logo.length; i++) {
                logo[i].classList.add("logo-dark-mode");
                logo[i].classList.remove("logo-light-mode");
            }


            for (i = 0; i < lightColorItems.length; i++) {
                lightColorItems[i].classList.remove('black-color');
            }
        }
        setDark();
    }
}

toggleSwitch.addEventListener('change', switchTheme);
// Dark mode __End__


// // // Loading __Start__

var loader = document.querySelector(".preloader");
let bb = document.styleSheets[1].cssRules[2];
let ba = document.styleSheets[1].cssRules[3];


window.onload = function () {
    Myloader();
};

function Myloader() {
    setTimeout(() => {
        bb.style.top = "50%";
        ba.style.bottom = "50%";
    }, 700);

    setTimeout(() => {
        loader.classList.remove("preloader-hidden");
        loader.classList.add("preloader-active");
    }, 1200);


    setTimeout(() => {
        loader.classList.remove("preloader-active");
        loader.classList.add("preloader-hidden");
        setTimeout(() => {
            bb.style.top = "0";
            ba.style.bottom = "0";
        }, 500);
    }, 3000);

    function updateProgressBar(percentage) {
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = percentage + '%';
        progressBar.innerHTML = percentage + '%';
    }

    let progress = 0;
    const intervalId = setInterval(function () {
        progress += 3;
        updateProgressBar(progress);

        if (progress >= 100) {
            clearInterval(intervalId);
        }
    }, 90);
};
// Loading __End__


// active three-line-menu ___Start___
var a = document.querySelector(".three-line-menu");
a.addEventListener("click", () => {
    a.classList.toggle("active-menu");
});
// active three-line-menu ___End___


// active side nav for mobile ___Start___
var sideNavMain = document.querySelector(".side-nav-main");
var overlay = document.querySelector(".overlay");
a.addEventListener("click", () => {
    sideNavMain.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sideNavMain.classList.remove("active");
    a.classList.remove("active-menu");
});
// active side nav for mobile ___End___

// active box of app bar when clicked ___Start___
var click = false;

function activeAppBarBox(type) {
    var typeBox = type;

    switch (typeBox) {
        case 'خانه':
            if (click == true) {
                document.querySelector('.main-box-app-bar .active').classList.remove('active');
                click = false;
            }
            document.querySelector('.main-box-app-bar :nth-child(1)').classList.add('active');
            click = true;
            break;

        case 'فروشگاه':
            if (click == true) {
                document.querySelector('.main-box-app-bar .active').classList.remove('active');
                click = false;
            }
            document.querySelector('.main-box-app-bar .shop').classList.add('active');
            click = true;
            break;

        case 'سبد خرید':
            if (click == true) {
                document.querySelector('.main-box-app-bar .active').classList.remove('active');
                click = false;
            }
            document.querySelector('.main-box-app-bar :nth-child(3)').classList.add('active');
            click = true;
            break;

        case 'پروفایل':
            if (click == true) {
                document.querySelector('.main-box-app-bar .active').classList.remove('active');
                click = false;
            }
            document.querySelector('.main-box-app-bar :nth-child(4)').classList.add('active');
            click = true;
            break;
    }
}
// active box of app bar when clicked ___End___


// active menu mobile when clicked categoties
var categoties = document.querySelector('.categories');
var categotiesButton = document.querySelector('.categories button');
categotiesButton.addEventListener('click', function () {
    categoties.classList.toggle('active');
});


// accordion on header ___Start___
const cardsContainer = document.querySelector(".slider-accordion");
const cards = document.querySelectorAll(".slider-accordion .card");
let activeCard = null;

cardsContainer.addEventListener('mouseover', (event) => {
    const targetCard = event.target.closest('.card');
    if (targetCard && !targetCard.classList.contains('active')) {
        if (activeCard !== null) {
            activeCard.classList.remove('active');
        }
        targetCard.classList.add('active');
        activeCard = targetCard;
    }
});

cardsContainer.addEventListener('mouseout', (event) => {
    const targetCard = event.target.closest('.card');
    if (targetCard && targetCard.classList.contains('active')) {
        targetCard.classList.remove('active');
        activeCard = null;
    }
});

const sliderHeader = document.querySelector(".slider-header");
function selectSlider(type) {
    const targetClass = {
        shirt: '.slider-header .slider-nav .shirt',
        shoe: '.slider-header .slider-nav .shoe',
        clock: '.slider-header .slider-nav .clock',
        accessory: '.slider-header .slider-nav .accessory',
        glasses: '.slider-header .slider-nav .glasses',
    };
    const targetSwiper = {
        shirt: '.slider-content .swiper.swiper-shirt',
        shoe: '.slider-content .swiper.swiper-shoes',
        clock: '.slider-content .swiper.swiper-clock',
        accessory: '.slider-content .swiper.swiper-accessory',
        glasses: '.slider-content .swiper.swiper-glasses',
    };

    sliderHeader.classList.add("active");
    document.querySelector(targetClass[type]).classList.add('selected');

    document.querySelector(targetSwiper[type]).classList.add('active-swiper');
}
// accordion on header ___End___

// select slider ___Start___
function activeSlide(type) {
    var selectedSlide = document.querySelector(".slider-header .slider-nav .selected");
    var activeSwiper = document.querySelector(".slider-content .swiper.active-swiper");
    var selectedSlideBefore = document.styleSheets[0].cssRules[109];
    var selectedSlideliBefore = document.styleSheets[0].cssRules[102];
    var selectedSlideliafter = document.styleSheets[0].cssRules[103];
    const targetSlide = {
        shirt: '.slider-header .slider-nav .shirt',
        shoe: '.slider-header .slider-nav .shoe',
        clock: '.slider-header .slider-nav .clock',
        accessory: '.slider-header .slider-nav .accessory',
        glasses: '.slider-header .slider-nav .glasses',
    };
    const targetSwiper = {
        shirt: '.slider-content .swiper.swiper-shirt',
        shoe: '.slider-content .swiper.swiper-shoes',
        clock: '.slider-content .swiper.swiper-clock',
        accessory: '.slider-content .swiper.swiper-accessory',
        glasses: '.slider-content .swiper.swiper-glasses',
    };

    selectedSlideBefore.style.height = "0";
    selectedSlideliafter.style.height = "70px";
    selectedSlideliBefore.style.height = "70px";
    setTimeout(() => {
        selectedSlide.classList.remove("selected");
        document.querySelector(targetSlide[type]).classList.add('selected');

        activeSwiper.classList.remove("active-swiper");
    }, 300);
    setTimeout(() => {
        selectedSlideBefore.style.height = "100%";
        selectedSlideliafter.style.height = "50px";
        selectedSlideliBefore.style.height = "50px";
        document.querySelector(targetSwiper[type]).classList.add("active-swiper");
    }, 600);
}
// select slider ___End___

// Swiper ___Start___
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Swiper ___End___