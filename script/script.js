const startButton = document.querySelector(".start-button"),
  firstScreen = document.querySelector(".first-screen"),
  mainForm = document.querySelector(".main-form"),
  formCalculate = document.querySelector(".form-calculate"),
  endButton = document.querySelector(".end-button"),
  total = document.querySelector(".total"),
  fastRange = document.querySelector(".fast-range");

showElement = elem => {
  elem.style.display = "block";
};

hideElem = elem => {
  elem.style.display = "none";
};

handlerCallBackForm = event => {
  const target = event.target;

  if (target.classList.contains("want-faster")) {
    target.checked ? showElement(fastRange) : hideElem(fastRange);
  }
};

startButton.addEventListener("click", function() {
  showElement(mainForm);
  hideElem(firstScreen);
});

endButton.addEventListener("click", function() {
  for (const elem of formCalculate.elements) {
    if (elem.tagName === "FIELDSET") {
      hideElem(elem);
    }
  }

  showElement(total);
});

formCalculate.addEventListener("change", handlerCallBackForm);
