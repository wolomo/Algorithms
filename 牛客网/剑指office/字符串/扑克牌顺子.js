function IsContinuous(numbers)
{
    // write code here
    if(numbers.length!=5) return false
    for(let i = 1;i<numbers.length;i++){
        let temp = numbers[i]
        while(numbers[i-1]>temp&&i>0){
            numbers[i]=numbers[i-1]
            i--
        }
        numbers[i]=temp
    }
    console.log(numbers)
    let i=0;j=1
    while(j>i&&j<numbers.length){
       
        if(numbers[i]==0){
            i++
            j++
        }else{
            if(numbers[i]==numbers[j]){
                return false
            }
            i++
            j++
        }
        
    }
    let flag =0
    let min= numbers.length-1

    for(let i =0;i<numbers.length;i++){
        if(numbers[i]==0){
            flag++
        }else if(numbers[min]>=numbers[i]){
            min =i
        }
    }

    let p1 =min
    let p2 =p1+1
    while(p1<p2&&p2<numbers.length){

         if((numbers[p2]-numbers[p1])==1){
            p2++
            p1++
        }else{
            flag--
            numbers[p1]++
        }
    }
    

    if(flag<0){
        return false
    }else{
        return true
    }
    
}

let x = IsContinuous([1,1,0,2,0])
console.log(x)