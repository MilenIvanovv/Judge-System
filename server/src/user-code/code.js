console.log('Hello World');

console.log('hello again');

if(process.send) {
  process.send('myMsg');
}

process.on('message', () => {
  console.log('a');
});

process.on('error', function(e){	
	console.log(e)
   });