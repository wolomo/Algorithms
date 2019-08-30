function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False



    let flag = new Array(numbers.length).fill(false)

    for(let i =0;i<numbers.length;i++) {
        if(numbers[i]>numbers.length){
            return false
        }
        if(flag[numbers[i]]==true){
            duplication[0]=numbers[i]
            return true
        }else{
            flag[numbers[i]]=true
        }
    }
    return false
}
