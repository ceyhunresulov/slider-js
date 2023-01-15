const images = document.getElementById("images");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

document.addEventListener("DOMContentLoaded", () => {
  createSnowIconInContainer();
});

leftBtn.addEventListener("click", rightScroll);

rightBtn.addEventListener("click", leftScroll);

function createSnowIconInContainer() {
  const container = document.getElementById("container");
  const far = document.createElement("i");
  far.classList.add("far");
  far.classList.add("fa-snowflake");
  far.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
  far.style.top = `${-Math.floor(Math.random() * 100)}px`;
  far.style.fontSize = `${Math.floor(Math.random() * 7)}px`;
  container.appendChild(far);
  setTimeout(() => {
    far.remove();
  }, 7000);
}
setInterval(createSnowIconInContainer, 60);

let clickedCount = 0;

function rightScroll() {
  clickedCount -= 1;
  if (images.offsetLeft < 0) {
    images.style.left = `${clickedCount * -window.innerWidth}px`;
  } else {
    leftBtn.style.cursor = "not-allowed";
  }

  rightBtn.style.cursor = "pointer";
}

function leftScroll() {
  clickedCount += 1;
  if (window.innerWidth * (images.children.length - 1) > -images.offsetLeft) {
    images.style.left = `${clickedCount * -window.innerWidth}px`;
  } else {
    rightBtn.style.cursor = "not-allowed";
  }

  leftBtn.style.cursor = "pointer";
}
