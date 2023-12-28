const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close',function(){
    const str = input.join('\n'); 
    const arr = str.split('');
    
    for(let i = 0; i < arr.length; i++){
       console.log(arr[i]);
    }
});