"use strict";

(function () {
  function imagesSlider(slider) {
    const sliderLine = slider.querySelector(".js-images-slider__line");
    const allSlides = sliderLine.querySelectorAll(".js-images-slider__slide");
    const btnPrev = slider.querySelector(".js-images-slider__control-previous");
    const btnNext = slider.querySelector(".js-images-slider__control-next");
    const progress = slider.querySelector(".js-images-slider__control-progress");

    let quantitySlides = allSlides.length;
    let currentSlideIndex = 0;
    let linePosition = 0;
    let offset = 100;

    const allProgressItems = progressItemsCreate();
    setProgress();

    allProgressItems.forEach((progressItem, indexProgressItem) => {
      progressItem.addEventListener("click", (e) => {
        linePosition = -offset * indexProgressItem;
        currentSlideIndex = indexProgressItem;
        setProgress();
        positionSetting();
      });
    });

    btnPrev.addEventListener("click", scrollBack);
    btnNext.addEventListener("click", scrollForward);

    function scrollForward() {
      linePosition = linePosition - offset;
      currentSlideIndex += 1;

      if (linePosition <= -offset * quantitySlides) {
        linePosition = 0;
        currentSlideIndex = 0;
      }
      positionSetting();
      setProgress();
    }

    function scrollBack() {
      linePosition = linePosition + offset;
      currentSlideIndex -= 1;

      if (linePosition > 0) {
        linePosition = -offset * (quantitySlides - 1);
        currentSlideIndex = quantitySlides - 1;
      }
      positionSetting();
      setProgress();
    }

    function positionSetting() {
      sliderLine.style.transform = `translateX(${linePosition}%)`;
    }

    function progressItemsCreate() {
      for (let i = 1; i < quantitySlides; i++) {
        const progressItem = document.createElement("div");
        progressItem.classList.add("js-images-slider__control-progress-item");
        progress.append(progressItem);
      }
      return progress.querySelectorAll(".js-images-slider__control-progress-item");
    }

    function setProgress() {
      const allProgressItem = progress.querySelectorAll(".js-images-slider__control-progress-item");
      allProgressItem.forEach((item) => {
        item.classList.remove("js-images-slider__control-progress-item--active");
      });

      allProgressItem[currentSlideIndex].classList.add("js-images-slider__control-progress-item--active");
    }

    function settingFromProgress(e) {
      console.log(e.currentTarget);
    }
  }

  const imagesSlidersAll = document.querySelectorAll(".js-images-slider");
  imagesSlidersAll.forEach((sliderItem) => {
    new imagesSlider(sliderItem);
  });
})();
