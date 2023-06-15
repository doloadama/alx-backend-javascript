process.stdin.setEncoding('utf8');

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for data on STDIN
process.stdin.on('data', (data) => {
  // Process the input
  const input = data.trim(); // Remove trailing newline character

  // Display the user's name
  console.log(`Your name is: ${input}`);
  process.exit(0); // Exit the program with success status code

  // Check if the user wants to end the program
  if (input.toLowerCase() === 'exit') {
    console.log('This important software is now closing');
    process.exit(0); // Exit the program with success status code
  }
});

// Listen for 'end' event on STDIN
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0); // Exit the program with success status code
});

// Resume the STDIN stream
process.stdin.resume();
