function FindNumsAppearOnce(array) {
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字

    if (array.length <= 2) {
        return array
    }
    let bitRes = 0;

    for (let a of array) {
        bitRes ^= a
    }

    //bitRes 是检测数组到底有没有不同数字的方法
    console.log(bitRes)
    if (bitRes === 0) return;

    let index = 0
    while ((bitRes & 1) === 0) {
        bitRes = bitRes >> 1
        index++
    
    }

    console.log(index)

    let [num1, num2] = [0, 0]

    for (var a of array) {
        if ((a >> index) & 1 === 1) {
            num1 = num1 ^ a
        } else {
            num2 = num2 ^ a
        }
    }
    return [num1, num2]

}


let x = FindNumsAppearOnce([1, 2, 7, 5, 6, 7, 5, 1])
console.log(x)