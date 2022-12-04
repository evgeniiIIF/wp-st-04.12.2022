"use strict";
(function () {
  const body = document.body;
  body.addEventListener("click", elementToggle);
  let commonParent;
  let isOpen = false;

  function elementToggle(e) {
    const target = e.target;
    const iconSidebar = target.closest(".icon-sidebar");

    if (iconSidebar) {
      openSidebar(iconSidebar);
    } else {
      closeSidebar(target);
    }
  }

  function openSidebar(trigger) {
    // commonParent = trigger.parentElement;
    body.classList.toggle("sidebar-left--open");
    body.classList.toggle("_lock");
    isOpen = !isOpen;
    addScrollWidth();
    if (!isOpen) {
      removeScrollWidth();
    }
  }
  function closeSidebar(target) {
    if (isOpen) {
      const element = target.closest(".sidebar-body");

      if (!element) {
        body.classList.remove("sidebar-left--open");
        body.classList.remove("_lock");
        isOpen = !isOpen;
        removeScrollWidth();
      }
    }
  }
  function getScrollWidth() {
    let div = document.createElement("div");

    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    return scrollWidth + "px";
  }
  function addScrollWidth() {
    body.style.paddingRight = getScrollWidth();
    const header = document.querySelector(".header");
    header.style.paddingRight = getScrollWidth();
  }
  function removeScrollWidth() {
    body.style.paddingRight = "";
    const header = document.querySelector(".header");
    header.style.paddingRight = "";
  }
})();
