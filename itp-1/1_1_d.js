process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  const s = parseInt(input);
  var hour = Math.floor(s / 3600);
  var minute = Math.floor( (s % 3600) / 60 );
  var second = Math.floor(s % 60);
  console.log(hour + ":" + minute + ":" + second);
});
