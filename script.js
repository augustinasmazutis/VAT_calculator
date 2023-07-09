// VARIABLES
// -- DOM
// --- DOM: input
const inputWithoutPVM = document.querySelector('#input-without-pvm');
const inputWithPVM = document.querySelector('#input-with-pvm');
const selectTypeOfPVM = document.querySelector('#pvm-type');
// --- DOM: output
const outputWithoutPVM = document.querySelector('#output-without-pvm');
const outputWithPVM = document.querySelector('#output-with-pvm');
const outputOfPVM = document.querySelector('#pvm-type-output');
const errorMessage = document.querySelector('#error-message');
// --- logic
let currentPVM = 21;

// FUNCTIONS
const calculateWithoutPVM = () => {
  const userInput = +inputWithoutPVM.value;
  // -- Validation of user input
  if (isNaN(userInput)) {
    errorMessage.innerText = 'Prašome nurodyti sumą skaičiais.';
    inputWithoutPVM.classList.add('error-input');
    return;
  }

  errorMessage.innerText = '';
  inputWithoutPVM.classList.remove('error-input');
  // -- Dissable other input
  if (userInput) {
    inputWithPVM.setAttribute('disabled', 'true');
  } else {
    inputWithPVM.removeAttribute('disabled');
  }

  //   -- calculations
  //   -- without PVM
  outputWithoutPVM.innerText = userInput.toFixed(2) + '€';
  //   -- with PVM
  outputWithPVM.innerText =
    (userInput + userInput * (currentPVM / 100)).toFixed(2) + '€';
  //   -- PVM
  outputOfPVM.innerText = (userInput * (currentPVM / 100)).toFixed(2) + '€';
};

const calcuteWithPVM = () => {
  const userInput = +inputWithPVM.value;

  // -- Validation of user input
  if (isNaN(userInput)) {
    errorMessage.innerText = 'Prašome nurodyti sumą skaičiais.';
    inputWithPVM.classList.add('error-input');
    return;
  }

  errorMessage.innerText = '';
  inputWithPVM.classList.remove('error-input');

  // -- Dissable other input
  if (userInput) {
    inputWithoutPVM.setAttribute('disabled', 'true');
  } else {
    inputWithoutPVM.removeAttribute('disabled');
  }

  // -- Calculations
  // -- without PVM
  outputWithoutPVM.innerText =
    (userInput / ((currentPVM + 100) / 100)).toFixed(2) + '€';

  // -- with PVM
  outputWithPVM.innerText = userInput.toFixed(2) + '€';

  // -- PVM
  outputOfPVM.innerText =
    (userInput - userInput / ((currentPVM + 100) / 100)).toFixed(2) + '€';
};
const changeCurrentPVM = (e) => {
  currentPVM = +e.target.value;

  if (inputWithoutPVM.value) {
    calculateWithoutPVM();
  } else if (inputWithPVM.value) {
    calcuteWithPVM;
  }
};

// EVENTS
inputWithoutPVM.addEventListener('keyup', calculateWithoutPVM);
inputWithPVM.addEventListener('keyup', calcuteWithPVM);
selectTypeOfPVM.addEventListener('change', changeCurrentPVM);
