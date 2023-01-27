export default function appendToEachArrayValue(array, appendString) {
  const newA = [];
  for (const idx of array) {
    newA.push(appendString + idx);
  }
  return newA;
}
