process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const choix = process.stdin.read();

  if (choix) {
    process.stdout.write(`Your name is: ${choix}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
