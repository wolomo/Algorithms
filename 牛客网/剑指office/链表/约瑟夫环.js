function LastRemaining_Solution1(n, m)
{
    // write code here

    if(n<1&&m<1){
        return -1
    }
    let list=[]
    for(let i = 0;i<n;i++){
        list[i]=i
    }

    let[i,step,count]=[-1,0,n]
    while(count>0){
        i++
        if(i>=n) i=0
        if(list[i]==-1) continue
        step++
        if(step==m){
            list[i]=-1
            step=0
            count--
        }
    }
    return i
}



function LastRemaining_Solution(n, m){
    if(n<1&&m<1){
        return -1
    }
    let list=[]
    for(let i = 0;i<n;i++){
        list[i]=i
    }
    let index=-1
    while(list.length>1){
        index = (index+m)%list.length
        console.log(list,index)
        list.splice(index,1)
        index--
    }

    return list[0]
}

let x = LastRemaining_Solution(5,3)
console.log(x)