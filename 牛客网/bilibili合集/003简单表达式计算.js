var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let list = []
rl.on('line', function(line){
    list.push(line)
    if(line=="END"){
        list.pop()
    

        for(let i=0;i<list.length;i++){
            console.log(fun(list[i]));
        }

        process.exit(0);
    }    
});

function isNum(char) {
    if (char >= "0" && char <= "9") {
      return true
    }else{
        return false
    }
}


function fun(S) {
    if (S == null || S.length == 1) {
        return S
    }

    S = S.split("")
    let arr=[]
    for (let i = 0; i < S.length; i++) {
        if (isNum(S[i])) {
            let str = S[i]
            let j= i+1
            if(isNum(S[j])){
                while(isNum(S[j])){
                    str+=S[j]
                    j++
                }                
            }
            arr.push(str)
            i=j-1
        }else{   
            arr.push(S[i])
        }
    }
    S=arr
    
    console.log("S",S)

    let numStack = new Array()
    let signStack = new Array()
    for (let i = 0; i < S.length; i++) {

        if (parseInt(S[i])||S[i]==0) {
            numStack.push(S[i])
        } else if (S[i] == "+" || S[i] == "-") {
            signStack.push(S[i])
        } else if (S[i] == "*") {
            if ((i + 1) < S.length) {
                numStack.push(numStack.pop() * S[i + 1])
                i++
            } else {
                return false
            }
        }
    }
    console.log("112",numStack, signStack)

    while (signStack.length > 0 && numStack.length > 1) {
        console.log(numStack, signStack)
        let sign = signStack.shift()
        let num1 = parseInt(numStack.shift())
        let num2 = parseInt(numStack.shift())
        if (sign == "+") {
            numStack.unshift(num1  + num2 )
        }else if(sign == "-") {
            numStack.unshift(num1 - num2)
        }
    }
    console.log(numStack, signStack)

    if (signStack.length == 0 && numStack.length == 1) {
        return numStack[0]
    } else {
        return false
    }
}
// fun("7+4*52+2+4-3-1")