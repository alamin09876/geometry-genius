function calculateRectangleArea() {
  const length = getInputFieldValue("rectangle-length");
  const width = getInputFieldValue("rectangle-width");
  const area = length * width;
  setInnerTextById("rectangle-area", area);
}
