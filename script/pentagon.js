function calculatePentagonArea() {
  const perimeter = getInputFieldValue("pentagon-perimeter");
  const apothem = getInputFieldValue("pentagon-apothem");
  const area = 0.5 * perimeter * apothem;
  setInnerTextById("pentagon-area", area);
}
