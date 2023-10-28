const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInput = () => {
  if (input.value.trim() !== "") {
    output.textContent = input.value;
  } else {
    output.textContent = "Anonymous";
  }
};

input.addEventListener("input", handleInput);
