const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
rl.on('close', (line) => fuelComparison(lines));

function fuelComparison([num1, num2]) {
    num1 = parseFloat(num1.slice(1,num1.length))
    num2 = parseFloat(num2.slice(1,num2.length))
    const litersToGallons = 3.78541
    const caToUsDollars = .75
    const canadianPrice = litersToGallons*caToUsDollars*num1
    console.log(canadianPrice > num2 ?  `American gas is ${num2 / canadianPrice} times cheaper.`: `Canadian gas is ${canadianPrice/ num2} times cheaper.`);
    
  }
  