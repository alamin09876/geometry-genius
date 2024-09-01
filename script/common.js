function getInputFieldValue(inputValue) {
  const parallelogramBaseInput = document.getElementById(inputValue);
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  return base;
}

function setInnerTextById(inputText, area) {
  const inputArea = document.getElementById(inputText);
  inputArea.innerText = area;
}
