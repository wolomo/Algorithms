function ReverseSentence(str)
{   
    if(str==null||str.length==1){
        return str
    }
    let [low,high]=[0,1]
    let list=[]
    while(high>low&&high<=str.length){
        if(str[high]==" "||high==str.length){
            let temp = str.slice(low,high)
            list.unshift(temp)
            low=high+1
            high+=2
        }else{
            high++
        }
    }
    return list.join(" ")
    
}

ReverseSentence("student. a am I3")