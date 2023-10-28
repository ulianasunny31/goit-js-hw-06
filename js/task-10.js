const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input[type='number']");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const amount = input.value;
  let boxSize = 30;

  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    boxes.append(box);

    const randomColor = getRandomHexColor();

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = randomColor;

    boxSize += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
