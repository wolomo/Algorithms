function rectCover(number) {
    if (number <= 0) {
        return 0
    } else if (number == 1) {
        return 1
    } else if (number == 2) {
        return 2
    } else {
        return rectCover(number - 1) + rectCover(number - 2)
    }
}


/**
 * 运行时间：1216ms

占用内存：5460k
 */


function rectCover2(number) {
    let f1=1,f2=2
    let temp=0
    if(number==1){
        return 1
    }
    if(number==2){
        return 2
    }
    while(number>=2){
        temp =f1+f2
        f1=f2
        f2=temp
        number--
    }
    return temp
}
