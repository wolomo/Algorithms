/**
 * 
 * @param {Number[][]} target 
 * @param {Number} array
 * @returns boolean 
 */


function Find(target, array)
{
    // write code here
    /**
     * 遍历二维数组的每行的最后一个
     *      当该值比target小时,记下这一行i
     * 遍历二维数组的每行第一个
     *      当该值比target大时,记下这一行j
     * 遍历啊第i~j行
     *      合适就输出
     */
    let first=0,last=0
    for(let i = 0 ;i<array.length;i++){
        if(array[i][0]>=target){
            last=i
            break
        }
    }

    for(let i = 0 ;i<array.length;i++){
        if(array[i][array[0].length-1]>=target){
            first=i
            break
        }
    }

    if(last==0){
        last=array.length
    }

    // first=first==0?0:first
    // last=last==0?array.length:last
    for(let i = first;i<last;i++){
        for(let j=0;j<array[0].length;j++){
            if(array[i][j]==target){
                return true
            }
        }
    }
    return false

}

console.log( Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))
