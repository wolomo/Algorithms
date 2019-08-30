function LeftRotateString(str, n)
{   if(str === null || str.length === 0){
        return "";
    }
    let length = str.length
    n=n%length
    //return str.slice(length-n)+str.slice(0,length-n)
    
    return str.slice(n,length)+str.slice(0,n)
}


let min = LeftRotateString("1123213YY",16)
console.log(min)