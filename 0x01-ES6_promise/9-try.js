function guardrail(mathFunction) {
  let queue = [];
  try {
    let result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
<<<<<<< HEAD
<<<<<<< HEAD
    queue.push('Guardrail was processed');

    return queue;
=======
    queue.push("Guardrail was processed");
>>>>>>> 0a9dd3abee3d5f517baa69fcdc5af14c6a940eff
=======
    queue.push('Guardrail was processed');
>>>>>>> 2faa4e3db5ca9b6634f7e5f17c29676e8fef441e
  }
  return queue;
}
