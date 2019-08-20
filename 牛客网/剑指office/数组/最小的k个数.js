function GetLeastNumbers_Solution(input, k) {

    if(k>input.length) return null
    for(let i = 0;i<input.length;i++){
        let flag=i
        for(let j=i+1;j<input.length;j++){
            if(input[flag]>input[j]){
                flag=j
            }
        }
        let temp = input[flag]
        input[flag]=input[i]
        input[i] =temp
    }
    return input.splice(0,k)
}
let k = GetLeastNumbers_Solution([4, 5, 1, 6, 2, 7, 3, 8], 4)
console.log(k)