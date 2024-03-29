const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
// rl.on('close', (line) => compute(lines));
rl.on('close', (line) => problem2(lines));

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
  
function compute(lines){
    let a = lines[0]
    console.log("Knock knock.")
    console.log("Who's there?")
    console.log(lines[0])
    console.log(a.substring(0, a.length-1), "who?")
     console.log(lines[1])
}

function problem2(lines){
    const varObj = {'': '%'}
    for(let line of lines){
        if(line.includes('=')){
            let [key, val] = line.split('=')
            varObj[key] = val
        }else{
            let openPercent = true
            for (var i = 0; i < line.length; i++) {
                if(line[i] == '%'){
                    if(openPercent){
                        line[i] = '{'
                        openPercent = !openPercent
                    }else{
                        line[i] = '}'
                        openPercent = !openPercent
                    }
                }
            }
        }
    }
    console.log(JSON.stringify(varObj))
}