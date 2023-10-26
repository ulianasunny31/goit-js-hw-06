const input = document.querySelector("#validation-input");
const requiredLength = Number(input.dataset.length);
input.addEventListener("blur", () => {
  if (requiredLength === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

//На випадок, якщо просто більше 6

// input.addEventListener("blur", () => {
//   if (input.value.length >= requiredLength) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//   }
// });
