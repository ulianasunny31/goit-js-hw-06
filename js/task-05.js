const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInput = () => {
  output.textContent = event.currentTarget.value;
};

input.addEventListener("input", handleInput);
