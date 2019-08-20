function FirstNotRepeatingChar(str) {
    let list = []

    for (let i = 0; i < str.length; i++) {
        let flag = -1
        for (let j = 0; j < list.length; j++) {
            if (list[j].val == str[i]) {
                flag = j
            }
        }
        if (flag == -1) {
            list.push(new beanS(str[i], i))
        } else {
            list[flag].count++
        }
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].count == 1) {
            // console.log(list[i])
            // console.log(list[i].pos)
            return list[i].pos
        }
    }
    
    return -1


    // write code here
}

function beanS(val, pos) {
    this.val = val;
    this.pos = pos;
    this.count = 1
}



FirstNotRepeatingChar("ewqeqweasdasfsadwqsfgwqeqwasdgeqrasdgrgjhgsdf")