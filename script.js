const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButtons = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText == "." && currentOperandTextElement.innerText == "") {
      currentOperandTextElement.innerText = "0.";
    } else {
      currentOperandTextElement.innerText += button.innerText;
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let a = button.innerText;
    let b = parseFloat(currentOperandTextElement.innerText);
    if (currentOperandTextElement.innerText == "") {
      b = 0;
    }

    // mulai itung2
    let c;
    let d;
    let e = "";
    if (previousOperandTextElement.innerText != "") {
      let x = previousOperandTextElement.innerText.slice(0, -1);
      c = parseFloat(x);
      e = previousOperandTextElement.innerText.slice(-1);
    } else {
      c = 0;
    }

    // operasi
    if (e == "+") {
      d = c + b;
    } else if (e == "-") {
      d = c - b;
    } else if (e == "*") {
      d = c * b;
    } else if (e == "÷") {
      d = c / b;
    } else {
      d = b;
    }

    // penempatan
    currentOperandTextElement.innerText = "";
    previousOperandTextElement.innerText = d + a;
  });
});

equalsButtons.addEventListener("click", () => {
  let b = parseFloat(currentOperandTextElement.innerText);
  if (currentOperandTextElement.innerText == "") {
    b = 0;
  }

  // mulai itung2
  let c;
  let d;
  let e = "";
  if (previousOperandTextElement.innerText != "") {
    let x = previousOperandTextElement.innerText.slice(0, -1);
    c = parseFloat(x);
    e = previousOperandTextElement.innerText.slice(-1);
  } else {
    c = 0;
  }

  // operasi
  if (e == "+") {
    d = c + b;
  } else if (e == "-") {
    d = c - b;
  } else if (e == "*") {
    d = c * b;
  } else if (e == "÷") {
    d = c / b;
  } else {
    d = b;
  }

  // penempatan
  currentOperandTextElement.innerText = d;
  previousOperandTextElement.innerText = "";
});

allClearButtons.addEventListener("click", () => {
  location.reload();
});

deleteButtons.addEventListener("click", () => {
  currentOperandTextElement.innerText =
    currentOperandTextElement.innerText.slice(0, -1);
});
