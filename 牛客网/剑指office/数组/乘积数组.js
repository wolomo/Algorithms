function multiply(array)
{
    // write code here

    let list=[]
    let sum = 1
    let temp=[]

    for(let i=0;i<array.length;i++){
        for(let i=0;i<array.length;i++){
            temp[i]=array[i]
        }

        temp[i]=1
        for(let j = 0 ;j<array.length;j++){
            console.log(temp[j])
            sum*=temp[j]
        }
        list[i]=sum
        sum=1
    }

    return list
}

let x = multiply([1,2,3,4,5])
console.log(x)