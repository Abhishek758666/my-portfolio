let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function appendValue(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function toggleSign() {
  if (displayValue !== '0') {
    displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
    updateDisplay();
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '%' || key === '/' || key === '*' || key === '-' || key === '+') {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') displayValue = '0';
    updateDisplay();
  }
});

updateDisplay();
