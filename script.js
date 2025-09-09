const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const squareBtn = document.getElementById("square");

let currentInput = "";
squareBtn.addEventListener("click", () => {
    if(currentInput !== "") {
        currentInput = (Number(currentInput) ** 2).toString();
        display.value = currentInput;
        return;
    }
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if(value === "C") {
      currentInput = "";
      display.value = "";
      return;
    }
    if(value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
      return;
    }
    if (value === "=") {
      try {
        currentInput = eval(currentInput); 
        display.value = currentInput;
      } catch {
        display.value = "Błąd";
        currentInput = "";
      }
    } else if (value !== "x²") {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
