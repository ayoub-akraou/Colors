"use strict";
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
const body = document.body;
function changeBg() {
  const random = () => Math.trunc(Math.random() * 255 + 1);
  color.textContent = `rgb(${random()},${random()},${random()})`;
  body.style.backgroundColor = color.textContent;
  color.style.color = color.textContent;
}
btn.addEventListener("click", changeBg);
