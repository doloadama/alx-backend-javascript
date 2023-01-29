function guardrail(mathFunction) {
  let queue = [];
  try {
    let result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
<<<<<<< HEAD
    queue.push('Guardrail was processed');

    return queue;
=======
    queue.push("Guardrail was processed");
>>>>>>> 0a9dd3abee3d5f517baa69fcdc5af14c6a940eff
  }
  return queue;
}
