const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
let Countervalue = document.querySelector("#value");

let count = 0;
Countervalue.textContent = count;

const increment = () => {
  count += 1;
  Countervalue.textContent = count;
};

btnIncrement.addEventListener("click", increment);

const decrement = () => {
  count -= 1;
  Countervalue.textContent = count;
};
btnDecrement.addEventListener("click", decrement);
