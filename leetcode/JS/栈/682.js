/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    /**
     * 1.遍历串
     * 2.将每轮积分存在栈中
     * 3.根据符号判断成绩   
     *         case:+ 本轮为上述两轮的和
     *         case:D 前一轮得分的两倍
     *         case:C 移出最后一个分数
     *      
     * 
     */

    let point = 0
    let stackPoint = []
    for (let i = 0; i < ops.length; i++) {


        if (parseInt(ops[i])) {
            stackPoint.push(Number(ops[i]))
        }
        if (ops[i] == "+") {
            if (stackPoint[0] && stackPoint[1]) {
                let temp1 = stackPoint.pop()
                let temp2 = stackPoint.pop()
                let temp = temp1 + temp2
                stackPoint.push(temp2)
                stackPoint.push(temp1)
                stackPoint.push(temp)
            }
        }
        if (ops[i] == 'D') {
            if (stackPoint[0]) {
                let temp1 = stackPoint.pop()
                let temp = 2 * temp1
                stackPoint.push(temp1)
                stackPoint.push(temp)
            }
        }
        if (ops[i] == 'C') {
            if (stackPoint[0]) {
                stackPoint.pop()
            }
        }
    }

    for (let j = 0; j < stackPoint.length; j++) {

        point+=stackPoint[j]

    }

    console.log(stackPoint)
    console.log(point)
};


calPoints(["5", "2", "C", "D", "+"])
calPoints(["5","-2","4","C","D","9","+","+"])

