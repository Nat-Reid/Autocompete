const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
// rl.on('close', (line) => compute(lines));
rl.on('close', (line) => pawnCapture(lines));

function pawnCapture([str]){
    let [pawn, bishop] = str.split(' ')
    let isCaptured = pawn.charCodeAt(0) - bishop.charCodeAt(0) == pawn[1] - bishop[1]
    console.log(isCaptured ? 'captured' : 'safe')
}