const registrationForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Введіть логін та пароль!");
  } else {
    const formInfo = {};

    for (const element of form.elements) {
      if (element.name) {
        formInfo[element.name] = element.value;
      }
    }
    console.log(formInfo);
    form.reset();
  }
};
registrationForm.addEventListener("submit", handleSubmit);
