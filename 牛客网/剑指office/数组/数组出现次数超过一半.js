function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(!numbers) return 0
    if(numbers.length==1) return numbers[0]
    
    let list =[]
    for(let i=0;i<numbers.length;i++){
        let flag = -1
        for(let j = 0;j<list.length;j++){
            // console.log(list[j].val,flag,list)
            if(list[j].val==numbers[i])
            flag =j
        }
        if(flag==-1){
            list.push(new nBean(numbers[i]))
        }else{
            list[flag].count++
            if(list[flag].count>numbers.length/2){
                return list[flag].val
            }
        }

        // console.log(numbers[i],flag,list)
    }
    return 0
}

function nBean(val){
    this.val=val
    this.count=1
}


let x = MoreThanHalfNum_Solution([1,2,3,2,4,2,2,5,2,3])
console.log(x)