const bgTop = document.querySelector(".background-top");
const bgBottom = document.body;
// Header Elements
const headerTitle = document.querySelector(".header__left__title");
const headerParagraph = document.querySelector(".header__left__paragraph");

const slider = document.querySelector(".header__right__slider");
const sliderCircle = document.querySelector(".header__right__slider__circle");

// Top Elements
const topCards = document.querySelectorAll(".top__card");
const topCardsHandles = document.querySelectorAll(".top__card__handle span");
const topCardsStatsH1 = document.querySelectorAll(".top__card__stats h2");
const topCardsStatsP = document.querySelectorAll(".top__card__stats p");

// Bottom Elements
const bottomTitle = document.querySelector(".bottom__title");
const bottomCards = document.querySelectorAll(".bottom__card");
const bottomCardsText = document.querySelectorAll(".bottom__card__left__text");
const bottomCardsNumber = document.querySelectorAll(
  ".bottom__card__left__number"
);

// Footer Elements
const attribution = document.querySelector(".attribution");

let toggle = false;

slider.addEventListener("click", () => {
  if (!toggle) {
    bgTop.style.background = "hsl(232, 19%, 15%)";
    bgBottom.style.background = "hsl(230, 17%, 14%)";

    // Header
    headerTitle.style.color = "hsl(0, 0%, 100%)";
    headerParagraph.style.color = "hsl(228, 34%, 66%)";

    sliderCircle.style.transform = "translateX(0)";
    slider.style.background = "linear-gradient(to right, #378fe6, #3eda82)";
    sliderCircle.style.background = "hsl(228, 28%, 20%)";

    // Top
    topCards.forEach((card) => {
      card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    topCardsHandles.forEach((handle) => {
      handle.style.color = "hsl(228, 34%, 66%)";
    });
    topCardsStatsH1.forEach((h2) => {
      h2.style.color = "hsl(0, 0%, 100%)";
    });
    topCardsStatsP.forEach((p) => {
      p.style.color = "hsl(228, 34%, 66%)";
    });

    // Bottom
    bottomTitle.style.color = "hsl(0, 0%, 100%)";
    bottomCards.forEach((card) => {
      card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    bottomCardsText.forEach((text) => {
      text.style.color = "hsl(228, 34%, 66%)";
    });
    bottomCardsNumber.forEach((number) => {
      number.style.color = "hsl(0, 0%, 100%)";
    });

    // Footer
    attribution.style.color = "hsl(0, 0%, 100%)";

    toggle = true;
  } else {
    bgTop.removeAttribute("style");
    bgBottom.removeAttribute("style");

    // Header
    headerTitle.removeAttribute("style");
    headerParagraph.removeAttribute("style");

    sliderCircle.removeAttribute("style");
    slider.removeAttribute("style");

    // Top
    topCards.forEach((card) => {
      card.removeAttribute("style");
    });
    topCardsHandles.forEach((handle) => {
      handle.removeAttribute("style");
    });
    topCardsStatsH1.forEach((h2) => {
      h2.removeAttribute("style");
    });
    topCardsStatsP.forEach((p) => {
      p.removeAttribute("style");
    });

    // Bottom
    bottomTitle.removeAttribute("style");
    bottomCards.forEach((card) => {
      card.removeAttribute("style");
    });
    bottomCardsText.forEach((text) => {
      text.removeAttribute("style");
    });
    bottomCardsNumber.forEach((number) => {
      number.removeAttribute("style");
    });

    // Footer
    attribution.removeAttribute("style");

    toggle = false;
  }
});
