

console.log('hello again');

if (process.send) {
  process.send('myMsg');
}

process.on('message', () => {
  console.log('a');
});

process.on('error', (e) => {
  console.log(e)
});