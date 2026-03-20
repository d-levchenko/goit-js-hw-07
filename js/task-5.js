function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomColor = document.querySelector('.change-color');

randomColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.querySelector('.color').textContent = newColor;
  document.body.style.backgroundColor = newColor;
});
