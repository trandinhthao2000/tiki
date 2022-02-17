var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// // header slider
var navArrowLeft = $(".arrow-left");
var navArrowRight = $(".arrow-right");

navArrowLeft.onclick = function () {
  $(".nav").style.transform = "translateX(0%)";
  $(".icon-arrow-right").style.display = "block";
  $(".icon-arrow-left").style.display = "none";
};

navArrowRight.onclick = function () {
  $(".nav").style.transform = "translateX(-40%)";
  $(".icon-arrow-left").style.display = "block";
  $(".icon-arrow-right").style.display = "none";
};

const stickDots = $$(".stick");
var prev = $(".slick-prev");
var next = $(".slick-next");
var counts = 0;

var transform = [
  "translateX(0)",
  "translateX(-100%)",
  "translateX(-200%)",
  "translateX(-300%)",
  "translateX(-400%)",
  "translateX(-500%)",
  "translateX(-600%)",
  "translateX(-700%)",
  "translateX(-800%)",
  "translateX(-900%)",
  "translateX(-1000%)",
  "translateX(-1100%)",
  "translateX(-1200%)",
  "translateX(-1300%)",
];

next.onclick = function () {
  counts++;
  if (counts > 13) {
    counts = 0;
  }
  $(".banner-img").style.transform = transform[counts];
  $(".stick-active").classList.remove("stick-active");
  stickDots[counts].classList.add("stick-active");
};

prev.onclick = function () {
  counts--;
  if (counts < 0) {
    counts = 13;
  }
  $(".banner-img").style.transform = transform[counts];
  $(".stick-active").classList.remove("stick-active");
  stickDots[counts].classList.add("stick-active");
};

$(".produit-next").onclick = function () {
  $(".produit-trans").style.transform = "translateX(-100%)";
  $(".produit-next").style.display = "none";
  $(".produit-prev").style.display = "block";
};

$(".produit-prev").onclick = function () {
  $(".produit-trans").style.transform = "translateX(0)";
  $(".produit-next").style.display = "block";
  $(".produit-prev").style.display = "none";
};

const trademarkDots = $$(".trademark-slider .dots");
const markNext = $(".trademark-hot .next");
const markPrev = $(".trademark-hot .prev");
const markSlider = [
  "translateX(0%)",
  "translateX(-100%)",
  "translateX(-200%)",
  "translateX(-300%)",
  "translateX(-400%)",
];

var a = 0;
// Next
markNext.onclick = function () {
  a++;
  if (a > 4) {
    a = 0;
  }
  $(".hot-img").style.transform = markSlider[a];
  $(".trademark-dots .dots-active").classList.remove("dots-active");
  trademarkDots[a].classList.add("dots-active");
};
// Prev
markPrev.onclick = function () {
  a--;
  if (a < 0) {
    a = 4;
  }
  $(".hot-img").style.transform = markSlider[a];
  $(".trademark-dots .dots-active").classList.remove("dots-active");
  trademarkDots[a].classList.add("dots-active");
};

setInterval(() => {
  $(".hot-img").style.transform = markSlider[a];
  $(".trademark-dots .dots-active").classList.remove("dots-active");
  trademarkDots[a].classList.add("dots-active");
  a++;
  if (a > 4) {
    a = 0;
  }
}, 5000);

const discount = $(".discount");
let left = $(".discount__icon--left");
let right = $(".discount__icon--right");
const discountContainer = $(".discount__container");
const discountSlide = [
  "translateX(0)",
  "translateX(-100%)",
  "translateX(-200%)",
  "translateX(-300%)",
];

var i = 0;

right.onclick = function () {
  i++;

  discountContainer.style.transform = discountSlide[i];
  left.style.display = "block";
};

left.onclick = function () {
  i--;

  discountContainer.style.transform = discountSlide[i];
};

// trend

let trendleft = $(".trends__icon--left");
let trendright = $(".trends__icon--right");
let trendsBody = $(".trends__body");
const trendsSlide = $(".trends__items");
var k = 0;
let slidePosition = ["translateX(0)", "translateX(-100.6%)"];
trendleft.onclick = function () {
  k--;
  trendsSlide.style.transform = slidePosition[k];
  trendleft.style.display = "none";
  trendright.style.display = "block";
};

trendright.onclick = function () {
  k++;
  trendsSlide.style.transform = slidePosition[k];
  trendleft.style.display = "block";
  trendright.style.display = "none";
};
