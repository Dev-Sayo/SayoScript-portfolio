"use strict";

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
})();

document.querySelectorAll("a, button, .tag, .project-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.width = "8px";
    cursor.style.height = "8px";
    ring.style.width = "56px";
    ring.style.height = "56px";
    ring.style.opacity = "0.3";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    ring.style.width = "42px";
    ring.style.height = "42px";
    ring.style.opacity = "0.6";
  });
});

// Scroll fade-up
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));

// aside
const drawer = document.getElementById("drawer");
// const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
// const closeAside = document.querySelector(".close");

// events
menuBtn.addEventListener("click", openMenu);
document.querySelector(".close").addEventListener("click", closeMenu);
// document.querySelector("#overlay").addEventListener("click", closeMenu);

openMenu();
closeMenu();

function openMenu() {
  drawer.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  drawer.classList.remove("open");
  document.body.style.overflow = "";
}

// Escape key closes drawer
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Reset on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
});
