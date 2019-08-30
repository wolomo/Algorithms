var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on('line', function(line){
    let k =parseInt(line.split(" ")[0])
    let S =line.split(" ")[1]
    console.log(fun(k,S));
});

function fun(k,S){
    let map = new Map()
    let str=""
    for(let i=0;i<S.length;i++){
        if(!map.has(S[i])){
            map.set(S[i],1)
        }else{
            let temp = map.get(S[i])+1
            map.set(S[i],temp)
        }
    }

    map.forEach((value,key)=>{
        if(value==1){
            k--
            if(k==0){
                str=key 
                 
            }
        }
    })
    if(str==""){
        return "Myon~"
    }else{
        return [str]
    }
  
} 

let x = fun(2 ,"misakamikotodaisuki")
let y = fun(3 ,"!bakabaka~ bakabaka~ 1~2~9!")
let z = fun(3 ,"3.1415926535897932384626433832795028841971693993751o582097494459211451488946419191919l91919hmmhmmahhhhhhhhhh")
let w = fun(7 ,"www.bilibili.com/av170001")
let n = fun(1 ,"111")


console.log(x)
console.log(y)
console.log(z)
console.log(w)
console.log(n)