function Add(num1, num2)
{
    // write code here

    //一直循环到进位莫得了
    while(num2!=0){

        // 异或以后 表示 本位
        let temp1 =num1^num2
        //与以后往前移一位表示 进位
        let temp2 =(num1&num2)<<1
        num1=temp1
        num2=temp2
    }

    return num1


}


console.log(1&2)
console.log(5^4)
console.log(5&4)

