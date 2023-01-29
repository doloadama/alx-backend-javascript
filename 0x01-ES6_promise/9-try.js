export default function guardrail(mathFunction) {
  let queue = [];
  try {
    let result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
