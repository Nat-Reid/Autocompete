const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const lines = [];
rl.on('line', (line) =>lines.push(line));
rl.on('close', (line) => problem2(lines));

String.prototype.format = function(obj) {
    let tempS = this.slice()
    for (let [key, value] of Object.entries(obj)){
        tempS = tempS.replace(`{${key}}`, value)
    }
    return tempS
  };

  String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
} 
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
    const returnLines = []
    for(let line of lines){
        if(line.includes('=')){
            let [key, val] = line.split('=')
            varObj[key] = val
        }else{
            let openPercent = true
            for (var i = 0; i < line.length; i++) {
                if(line[i] == '%'){
                    if(openPercent){
                        line = line.replaceAt(i,'{')
                        openPercent = !openPercent
                    }else{
                        line = line.replaceAt(i,'}')
                        openPercent = !openPercent
                    }
                }
            }
            // console.log(line.format(varObj))
            returnLines.push(line.format(varObj))
        }
    }
    console.log(returnLines)
}