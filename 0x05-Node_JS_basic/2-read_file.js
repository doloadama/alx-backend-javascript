process.stdin.setEncoding('utf8');

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for data on STDIN
process.stdin.once('data', (data) => {
  // Process the input
  const input = data.trim(); // Remove trailing newline character

  // Display the user's name
  console.log(`Your name is: ${input}`);

  // Display closing message
  console.log('This important software is now closing');
});

module.exports = countStudents;
