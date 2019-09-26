const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
rl.on('close', (line) => compute(lines));

function compute(lines){
    let a = lines[0]
    console.log("Knock knock.")
    console.log("Who's there?")
    console.log(lines[0])
    console.log(a.substring(0, a.length-1), "who?")
     console.log(lines[1])
}