export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      result += `${elem.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
