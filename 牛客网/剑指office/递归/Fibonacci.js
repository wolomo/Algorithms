function Fibonacci(n)
{
    // write code here
    // if(n==0) return 1
    // else if(n==1) return 2
    // else return Fibonacci(n-1)+Fibonacci(n-2)
    let f1=0,f2=1;
    let temp=0
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }    

    
    while(n>=2){
        temp = f1+f2
        f1=f2
        f2=temp
        n--
    }
    return temp
}

console.log(Fibonacci(0))
console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
