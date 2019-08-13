function NumberOf1(n) {
    let arr = new Array(31).fill(0)
    let num = 0
    if (n >= 0) {
        arr.push(0)
        num = 0
        let k=0
        while (n > 0) {
            arr[k++]=(n % 2)
            if (n % 2 == 1) num++
            n = Math.floor(n / 2)
        }
    }else{
        let m=-n
        let k=0
        while (m > 0) {
            arr[k++]=(m% 2)
            m = Math.floor(m / 2)
        }
        // console.log(arr)
        for(let i=0;i<arr.length;i++){
            if(arr[i]==1){
                arr[i]=0
            }
            else if(arr[i]==0){
                arr[i]=1
            }
        }
        // console.log(arr)

        
        for(let i=0;i<arr.length;i++){

            if(arr[i]==1){
                arr[i]=0
            }
            else if(arr[i]==0){
                arr[i]=1
                break
            }
        }
        // console.log(arr)

        arr.push(1)
        for(let i=0;i<32;i++){
            if(arr[i]==1){
                num++
            }
        }

    }
    // console.log(arr,num)
    return  num
    // write code here
}

NumberOf1(-2147483648)