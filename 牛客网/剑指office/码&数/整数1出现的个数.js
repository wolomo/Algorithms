function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let count = 0
    let i = 1
    let pre = 0,
        curr = 0,
        next = 0
    while (n >= i) {
        pre = parseInt(n/(i*10))
        curr= parseInt(n/i)%10
        next = n-parseInt(n/i)*i
        if(curr==0){
            count+=pre*i
        }else if(curr==1){
            count+=pre*i+next+1
        }else{
            count+=(pre+1)*i
        }
        i*=10
    }

    return count
}

let x = NumberOf1Between1AndN_Solution(13)

console.log(x)