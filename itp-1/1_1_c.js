process.stdin.setEncoding('utf-8');
process.stdin.on('data', input => {
  const x = parseInt(input.split(" ")[0]);
  const y = parseInt(input.split(" ")[1]);  
  const area = x * y;
  const perimeter = 2 * (x + y);
  console.log(area, + " " + perimeter);
});