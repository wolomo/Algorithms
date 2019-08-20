function FindGreatestSumOfSubArray(array)
{
    let max =array[0]
    let sum=array[0]
    // write code here
    for(let i= 1;i<array.length;i++){
        if(sum<0){
            sum=array[i]
        }else{
            sum+=array[i]
        }

        if(sum>max){
            max =sum
        }
    }

    return max
}



function FindMinestSumOfSubArray(array)
{
    let min= array[0]
    let sum =array[0]

    for(let i= 1;i<array.length;i++){
        if(sum>0){
            sum=array[i]
        }else{
            sum+=array[i]
        }
        if(sum<min){
            min = sum
        }
    }
    return min
}

let min = FindMinestSumOfSubArray([6,-3,2,-7,-15,1,2,2])
console.log(min)