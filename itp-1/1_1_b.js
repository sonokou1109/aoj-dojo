process.stdin.setEncoding('utf-8');
process.stdin.on('data', num => {
  console.log(num*num*num);
});