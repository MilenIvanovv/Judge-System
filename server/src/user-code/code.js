
const input = process.argv.slice(2);

const gets = (() => {
  let i = 0;

  return () => input[i++];
})();

// const print = (x) => process.send({type: 'answer', data: x});
const print = console.log;


process.on('exit', () => {
  console.log(process.memoryUsage().heapUsed);
});

print(+gets() + +gets()); print(2);