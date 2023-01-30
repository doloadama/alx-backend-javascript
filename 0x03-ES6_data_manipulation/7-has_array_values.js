export default function hasValuesFromArray(set, arr) {
  for (const elem of arr) {
    if (!set.has(elem)) return false;
  }
  return true;
}
