
var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on('line', function(line){
   
    console.log(fun(line));
});






function fun(x){
    let str=""

    while(x>0){
        if(x%2==1){
            str+=2
            x = (x-1)/2
        }else if(x%2==0){
            str+=3
            x = (x-2)/2
        }
    }
    return str.split("").reverse().join("")

}