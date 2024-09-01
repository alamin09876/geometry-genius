function calculateTriangleArea() {
  const base = getInputFieldValue("triangle-base");
  const height = getInputFieldValue("triangle-height");
  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area);
}
