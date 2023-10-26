const bodyElement = document.querySelector("body");
const spanText = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

const changeColor = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const randomColor = getRandomHexColor();
  spanText.textContent = randomColor;

  bodyElement.style.backgroundColor = randomColor;
};

buttonChangeColor.addEventListener("click", changeColor);
