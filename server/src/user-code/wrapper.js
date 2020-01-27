
const input = process.argv.slice(2);

const gets = (() => {
  let i = 0;

  return () => input[i++];
})();

const print = (x) => process.send({type: 'answer', data: x});

process.on('message', (msg) => {
  if (msg === 'get_memory_usage') {
    process.send({ type: 'memory_usage', data: process.memoryUsage()});
  }
});

