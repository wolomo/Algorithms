function isSqureSum(a){
    var i = 1,j = Math.ceil(a/2)
    while(i<=j){
        console.log(i,j)
        var sum = i*i+j*j
        if(sum==a){
            return true
        }else if(sum<a){
            i++
        }else{
            j--
        }
    }
    return false
}




console.log(isSqureSum(5))
