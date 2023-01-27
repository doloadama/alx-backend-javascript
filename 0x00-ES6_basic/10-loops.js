export default function appendToEachArrayValue(array, appendString) {
  let idx;
  const newA = [];
  for (idx of array) {
    newA.push(appendString + idx)
  }
  return array;
  }