

// https://www.cnblogs.com/HiuYanChong/p/5317938.html

function swap(a){
    var temp =a[0]
    a[0]= a[1]
    a[1] =temp
    return a
}

console.log(swap([1,2]))


//冒泡排序
function BubbleSort(array) {
    // 循环n次
    for(let i =0;i<array.length;i++){
        // 一次循环就将最大值交换到最后面
        //后面只用循环1-(n-1) 继续交换
        for(let j =0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                var temp =array[j]
                array[j]= array[j+1]
                array[j+1] =temp
            }
        }
    }
    return array
}
// console.log(BubbleSort([10,9,8,7,7,6,5,11,3]))



//选择排序
function SelectionSort(array) {
    let pos = 0;
    for(let i =0;i<array.length;i++){
        //将数组的第一个作为最小值
        let min = array[i]
        // 循环一次找到最小的那个数的下标
        for(let j =i;j<array.length;j++){
            if(array[j]<=min){
                pos = j
            }
        }
        //将找到的那个下标与第一个交换
        let temp = array[pos];
        array[pos] =array[i]
        array[i] =temp
        console.log(array)
    }
    return array
}
// console.log(SelectionSort([10,9,8,7,7,6,5,11,3]))


//插入排序
function InsertionSort(array) {
    for(let i =1;i<array.length;i++){
        // 得到当前需要插入的值
        let key= array[i]
        //如果他前面的值比他大,
        while (array[i-1]>key&&i>0) {
            //那么就将这个值在数组中的地方往后挪一位
            array[i]=array[i-1];
            //再往前遍历
            i--
        }
        // 不满足条件的话,就将key值插入到该位置
        array[i]=key
        console.log(array)
    }
    return array
}

console.log(InsertionSort([10,9,8,7,7]))




//希尔排序
function ShellSort(array) {

}