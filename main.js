function copyMenu() {
  // Copy inside .dpt-cat to .department
  var departmentCategory = document.querySelector(".dpt-cat");
  var departmentPlace = document.querySelector(".departments");

  if (departmentCategory && departmentPlace) {
    departmentPlace.innerHTML = departmentCategory.innerHTML;
  }

  // Copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");

  if (mainNav && navPlace) {
    navPlace.innerHTML = mainNav.innerHTML;
  }

  // Copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");

  if (topNav && topPlace) {
    topPlace.innerHTML = topNav.innerHTML;
  }
}

copyMenu();
// show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const siteElement = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  siteElement.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  siteElement.classList.remove("showmenu");
});
// Show sub menu on mobile
const subMenus = document.querySelectorAll(".has-child .icon-small");
subMenus.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenus.forEach((item) => {
    if (item !== this) {
      item.closest(".has-child").classList.remove("expand");
    }
  });

  if (this.closest(".has-child").classList.contains("expand")) {
    this.closest(".has-child").classList.remove("expand");
  } else {
    this.closest(".has-child").classList.add("expand");
  }
}
// import swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
// show search

const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger"),
  dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle('showdpt')
});

var productsThumb = new Swiper('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3, // Corrected typo (slidesPreView to slidesPerView)
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
      481: {
          spaceBetween: 32,
      }
  }
});

var productBig = new Swiper('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
      nextEl: '.swiper-button-next', // Corrected typo (nexEl to nextEl)
      prevEl: '.swiper-button-prev', // Corrected typo (preEl to prevEl)
  },
  thumbs: {
      swiper: productsThumb,
  }
});

// stock  product bar width  percentage
var stock =document.querySelectorAll('.products .stock');
for (let x = 0; x < stock.length; x++){
  let stock = stock[x].dataset.stock,
  available = stock[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold *100/stock;
  stock[x].querySelector('.available').style.width = percent + '%';
}

// Show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
  setTimeout(() => {
    if (!divPopup.classList.contains('show')) {
      divPopup.classList.add('show');
    }
  }, 250);
});

// Close by click outside
document.addEventListener('click', (e) => {
  const isClosest = e.target.closest(divtoShow);
  if (!isClosest && divPopup.classList.contains('show')) {
    divPopup.classList.remove('show');
  }
});


// show modal  on load
window.onload = function () {
  document.querySelector('.site').classList.toggle('showmodal');
}
document.querySelector('.modalclose').addEventListener('click', function(){
  document.querySelector('.site').classList.remove('showmodal');
});

// Go to up on click
const goTopButton = document.querySelector(".backtotop");
goTopButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});