const readline = require('readline');
const rl = readlin.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
rl.on('close', (line) => compute(lines));

function compute(lines){ console.log(lines)}