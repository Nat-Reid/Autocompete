const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
// rl.on('close', (line) => compute(lines));
rl.on('close', (line) => quack(lines));
 
function quack(lines) {
    let actions = []
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let returnString = []
    lines.forEach(element => {
        actions = actions.concat(element.split(" "))
    });
    let index = 0
    console.log(actions)
    for(let action of actions){
        if(action == "qwak"){
            index++;
        }else if(action == "quack"){
            index--;
        }else{
            returnString.push(letters[index])
        }
    }
    console.log(returnString.join(''))
}