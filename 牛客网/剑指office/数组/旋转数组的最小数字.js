function minNumberInRotateArray(rotateArray)
{
    // write code here
    let first=0
    let last =rotateArray.length-1
    let mid = 0
    while(rotateArray[first]>=rotateArray[last]){
        console.log(first,last)
        if(last-first==1){
            mid = last
            break
        }
        mid=first+Math.floor((last-first)/2)

       

        if(rotateArray[mid]>=rotateArray[first]){
            first = mid
        }
        if(rotateArray[mid]<=rotateArray[last]){
            last=mid
        }
    }
    return rotateArray[mid]
}


console.log(minNumberInRotateArray([3,4,5,1,2]))