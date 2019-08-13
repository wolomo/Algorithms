function reOrderArray(array)
{
    // write code here
    let  stack1=[]
    let  stack2=[]

    for(let i=0;i<array.length;i++){
        if(array[i]%2==1){
            stack1.push(array[i])
        }else{
            stack2.push(array[i])
        }
    }

    return stack1.concat(stack2)
}

console.log(reOrderArray([1,3,5,2,8,4,3,9,4]))