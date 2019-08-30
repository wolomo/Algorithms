function Sum_Solution(n)
{
    // write code here
    let ans=n

    console.log(ans)
    ans&&(ans+=Sum_Solution(n-1))
    console.log(ans)
    return ans
}


let kk = Sum_Solution(10)
console.log(kk)


console.log(3&&2)