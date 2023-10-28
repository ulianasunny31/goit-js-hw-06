const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputControl.value}px`;
inputControl.addEventListener("input", (event) => {
  let fontSizeValue = event.target.value;
  spanText.style.fontSize = `${fontSizeValue}px`;
});
