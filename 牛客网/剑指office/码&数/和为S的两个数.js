function FindNumbersWithSum(array, sum)
{
    // write code here
    let list =[]

    let [low,high]=[0 ,array.length-1]

    while(high>low){
        console.log(low,high)
        let currSum = array[low]+array[high]
        if(currSum==sum){
            return[array[low],array[high]]
        }else if(currSum>sum){
            high--
        }else if(currSum<sum){
            low++
        }

    }

    return []
}

let xx = FindNumbersWithSum([1,2,4,7,11,15],15)
console.log(xx)