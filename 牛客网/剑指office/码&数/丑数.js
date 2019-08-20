function GetUglyNumber_Solution(index) {
    if (index == 0) return 0
    let l2 = 0;
    let l3 = 0;
    let l5 = 0;
    let list = [1]
    while (list.length < index) {
        let m2 = list[l2] * 2
        let m3 = list[l3] * 3
        let m5 = list[l5] * 5
        let min = Math.min(m2, m3, m5)
        console.log(l2, l3, l5)
        console.log(m2, m3, m5)
        console.log(min, list)
        list.push(min)

        if (min == m2) l2++
        if (min == m3) l3++
        if (min == m5) l5++

    }

    console.log(list)
    return list.pop()
}

GetUglyNumber_Solution1(20)



function GetUglyNumber_Solution1(index) {
    //维持一个下标
    let [l2, l3, l5] = [0,0,0]
    //初始数组
    let list = [1]
    //当数组长度index
    while (list.length < index) {
        /**
         * 本来是要找出list[i]*2,3,5的所有值
         * 
         * 但是我们只是需要找到乘2,3,5的值最小的那个值(使用下标l2,l3,l5来控制)
         */
        let m2 = list[l2] * 2,
            m3 = list[l3] * 3,
            m5 = list[l5] * 5;
        let min = Math.min(m2, m3, m5)
        list.push(min)
        if (min == m2) l2++
        if (min == m3) l3++
        if (min == m5) l5++
    }

    console.log(list)
}