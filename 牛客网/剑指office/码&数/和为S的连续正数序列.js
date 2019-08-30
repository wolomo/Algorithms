function FindContinuousSequence(sum) {
    // write code here
    let list = []

    if (sum < 0) return list

    let [low, high] = [1, 2]

    while (high > low) {



        let currSum = (high + low) * (high - low +1) / 2
        console.log(low,high,currSum)
        if (currSum == sum) {
            let temp = []
            for (let i = low; i <= high; i++) {
                temp.push(i)
            }
            list.push(temp)
            low++
        } else if (currSum < sum) {
            high++
        } else if (currSum > sum) {
            low++
        }
    }
    return list
}



let xx = FindContinuousSequence(3)

console.log(xx)