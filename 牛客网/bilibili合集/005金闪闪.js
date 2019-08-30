var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let list = []
let lineLength = 0
let listLength = 0
let dataArr = []
rl.on('line', function (line) {
    lineLength++
    list.push(line)
    if (lineLength == 2) {
        dataArr = line
    }
    if (lineLength == 3) {
        listLength = parseInt(line)
    }
    if (lineLength == listLength + 3) {

        list = list.slice(3)
        // console.log(dataArr,list)
        console.log(fun(dataArr, list))
        process.exit(0);
    }

});





function fun(S, list) {
    S = S.split(" ").map(Number)
    // console.log(S)
    let num = 0;
    for (let i = 0; i < list.length; i++) {
        let temp = list[i].split(" ")
        let first = temp[0] - 1
        let last = temp[1] - 0

        // console.log(first,last)

        if ((last - first) > 1) {
            let aim = S.slice(first, last)
            // console.log(aim)
            // let max = []
            // for (let j = 0; j < 3; j++) {
            //     let maxtemp = 0
            //     for (let i = 0; i < aim.length; i++) {
            //         if (aim[maxtemp] < aim[i]) {
            //             maxtemp = i
            //         }
            //     }
            //     // console.log(aim[maxtemp])
            //     max.push(aim[maxtemp])
            //     aim.splice(maxtemp, 1)
            // }

            // // console.log(max)
            // if (max[0] < (max[1] + max[2])) {
            //     num++
            // }

            for(let i =0;i<3;i++){
                let max = i
                for(let j=i;j<aim.length;j++){
                    if(aim[max]<aim[j]){
                        min =j
                    }
                }
                let temp =aim[min]
                aim[min]=aim[i]
                aim[i]=temp
            }
            
            if (aim[0] < (aim[1] + aim[2])) {
                num++
            
            }
        }else if((last - first) > 42){
            num++
        }
    }

    // console.log(num)
    return num
}

// fun("1 10 100 95 101",["1 3","2 4","2 5","3 5"])
// fun("1 10 100 95 101", ["1 4"])