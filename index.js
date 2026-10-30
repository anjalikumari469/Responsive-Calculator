let currentDisplay = '';
const display = document.querySelector('#display');

function updateDisplay() {
  display.value = currentDisplay || '0';
}

function appendToDisplay(value) {
  if (display.value === 'Error') clearDisplay();
  currentDisplay += value;
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = '';
  updateDisplay();
}

function deleteLast() {
  currentDisplay = currentDisplay.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let expression = currentDisplay.replace(/×/g, '*').replace(/−/g, '-');
    let result = eval(expression);
    currentDisplay = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    updateDisplay();
  } catch {
    currentDisplay = 'Error';
    updateDisplay();
    setTimeout(clearDisplay, 1500);
  }
}

updateDisplay();