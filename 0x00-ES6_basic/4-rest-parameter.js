export default function returnHowManyArguments(...args) {
  let sum = 0;
  var arg;
  for (arg of args){
    sum += 1;
  }
  return sum;
}
