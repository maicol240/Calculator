let screen = document.querySelector(".screen");

const BUTTON = document.querySelectorAll("button");

//add Event listener to each button
BUTTON.forEach((button) => {
  button.addEventListener("click", () => {
    const currentContext = screen.textContent;
    const operations = ["+", "*", "/", "-"];

    // C pressed reset screen to 0
    if (button.textContent == "C") {
      screen.textContent = 0;
    }

    //add Operation
    if (button.classList.contains("operation")) {
      //check if last button is and operator if is it throws an error
      let lastChart = currentContext.charAt(currentContext.length - 1);
      let containsOperation = operations.some((operation) =>
        currentContext.includes(operation)
      );

      if (operations.includes(lastChart) || containsOperation) {
        alert("ERROR Invalid Formating");
      } else {
        screen.textContent += button.textContent;
      }
    }

    //display gets set to a number when pressed
    else if (button.classList.contains("number")) {
      if (currentContext == "0") {
        screen.textContent = button.textContent;
      } else screen.textContent += button.textContent;

      //solution
    }

    //Equal button will get the string split if contatins any operands and solve it
    else if (button.classList.contains("equal")) {
      let solution;
      const splitOperation = currentContext.split(/[/\/*+-]/);
      console.log(splitOperation);
      let getOperation = operations.find((operation) =>
        currentContext.includes(operation)
      );
      if (splitOperation[1] == "") {
        alert("input a number");
        splitOperation[1] = "0";
      }

      switch (getOperation) {
        case "*":
          solution = parseInt(splitOperation[0]) * parseInt(splitOperation[1]);
          screen.textContent = solution;
          break;
        case "+":
          solution = parseInt(splitOperation[0]) + parseInt(splitOperation[1]);
          screen.textContent = solution;
          break;
        case "-":
          solution = parseInt(splitOperation[0]) - parseInt(splitOperation[1]);
          screen.textContent = solution;
          break;
        case "/":
          if (splitOperation[1] === "0") {
            alert("cant divide by 0");
            screen.textContent = "0";
            break;
          } else {
            solution =
              parseFloat(splitOperation[0]) / parseFloat(splitOperation[1]);
            screen.textContent = solution;
            break;
          }
      }
    }
  });
});
