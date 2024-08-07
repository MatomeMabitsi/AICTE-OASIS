const display = document.getElementById('display');

function addToDisp(value) {
  display.value += value;
}

function clearScreen() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
