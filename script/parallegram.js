function calculateParallelogramArea() {
  const base = getInputFieldValue("parallelogram-base");
  const height = getInputFieldValue("parallelogram-height");
  const area = base * height;
  setInnerTextById("parallelogram-area", area);
}
