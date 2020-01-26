
const input = process.argv.slice(2);

const gets = (() => {
  let i = 0;

  return () => input[i++];
})();

const print = (x) => process.send(x);

print(+gets() + +gets()); 