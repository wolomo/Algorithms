function PrintMinNumber(numbers) {

    if(!numbers) return ""

    for(let i=0;i<numbers.length;i++){
        let flag=i
        for(let j=i+1;j<numbers.length;j++){
            if(!compare(numbers[flag],numbers[j])){
                flag=j
            }
        
        }
        let temp = numbers[flag]
        numbers[flag]=numbers[i]
        numbers[i]=temp
    }
    console.log(numbers.join(""))
    return parseInt(numbers.join(""))
}

function compare(n1, n2) {
    let s1 = n1 + '' + n2
    let s2 = n2 + '' + n1
    // console.log(s1,s2)
    return parseInt(s1)<parseInt(s2)?true:false
}

// console.log(compare(1,12))

PrintMinNumber([3,32,321])