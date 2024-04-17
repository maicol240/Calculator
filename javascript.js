let screen = document.querySelector(".screen");

const BUTTONS = document.querySelectorAll(".number");

BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    let currentContext = screen.textContent;

    if (currentContext == 0) {
      currentContext = button.textContent;
    } else currentContext += button.textContent;

    screen.textContent = currentContext;
  });
});
