"use strict";

// check for saved 'darkMode' in localStorage
let lightMode = localStorage.getItem("lightMode");
localStorage.removeItem("darkMode");

const lightModeToggle = document.querySelector("#light-mode-toggle");

const enablelightMode = () => {
  document.body.classList.add("lightmode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disablelightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("lightmode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enablelightMode();
}

lightModeToggle.addEventListener("click", (e) => {
  console.log(lightModeToggle, e.target);
  // get their lightMode setting
  lightMode = localStorage.getItem("lightMode");

  if (lightMode !== "enabled") {
    enablelightMode();
    // if it has been enabled, turn it off
  } else {
    disablelightMode();
  }
});
