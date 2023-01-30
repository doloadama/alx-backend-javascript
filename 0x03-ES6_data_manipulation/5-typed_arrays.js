export default function createInt8TypedArray(lenght, position, value) {
  if (position => lenght) throw Error('Position outside range')  
  const buffer = new ArrayBuffer(lenght);
  const newView = new DataView(buffer, 0, lenght);
  const arr = new Int8Array(buffer);
  arr[position] = value;
  return newView;
}
