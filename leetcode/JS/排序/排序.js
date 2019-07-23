// https://www.cnblogs.com/HiuYanChong/p/5317938.html

function swap(a) {
    var temp = a[0]
    a[0] = a[1]
    a[1] = temp
    return a
}

// console.log(swap([1,2]))


//冒泡排序
function BubbleSort(array) {
    // 循环n次
    for (let i = 0; i < array.length; i++) {
        // 一次循环就将最大值交换到最后面
        //后面只用循环1-(n-1) 继续交换
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}
// console.log(BubbleSort([10,9,8,7,7,6,5,11,3]))

function BubbleSort2(array) {

    for (let i = 0; i < array.length; i++) {
        // console.log(array)
        for (let j = array.length; j > i; j--) {
            if (array[j] > array[j - 1]) {
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
        }
    }
    return array
}
// console.log(BubbleSort2([10,9,8,7,7,6,5,11,3]))



//选择排序
function SelectionSort(array) {
    let pos = 0;
    for (let i = 0; i < array.length; i++) {
        //将数组的第一个作为最小值
        let min = array[i]
        // 循环一次找到最小的那个数的下标
        for (let j = i; j < array.length; j++) {
            if (array[j] <= min) {
                pos = j
            }
        }
        //将找到的那个下标与第一个交换
        let temp = array[pos];
        array[pos] = array[i]
        array[i] = temp

    }
    return array
}
// console.log(SelectionSort([10,9,8,7,7,6,5,11,3]))

function SelectionSort2(array) {
    let pos = 0
    for (let i = 0; i < array.length; i++) {
        var max = array[i]
        for (let j = i; j < array.length; j++) {
            if (array[j] >= max) {
                pos = j
            }
        }
        let temp = array[pos]
        array[pos] = array[i]
        array[i] = temp
    }
    return array
}

// console.log(SelectionSort2([10,9,8,7,7,6,5,11,3]))


//插入排序
function InsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        // 得到当前需要插入的值
        let key = array[i]
        //如果他前面的值比他大,
        while (array[i - 1] > key && i > 0) {
            //那么就将这个值在数组中的地方往后挪一位
            array[i] = array[i - 1];
            //再往前遍历
            i--
        }
        // 不满足条件的话,就将key值插入到该位置
        array[i] = key
        console.log(array)
    }
    return array
}

// console.log(InsertionSort([10,9,8,7,7]))


function InsertionSort2(array) {
    for (var i = 1; i < array.length; i++) {
        var key = array[i]
        while (array[i - 1] < key && i > 0) {
            array[i] = array[i - 1]
            i--
        }
        array[i] = key
    }
    return array
}
// console.log(InsertionSort2([10,9,8,7,7,6,5,11,3]))



// 归并排序

function merge(left, right) {
    //两个有序数组比较变成一个2n长度的数组
    let arrOK = []
    let i = j = k = 0
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arrOK[k] = left[i]
            k++
            i++
        }
        if (left[i] > right[j]) {
            arrOK[k] = right[j]
            k++
            j++
        }

    }
    while (i < left.length) {
        arrOK[k++] = left[i++]
    }
    while (j < right.length) {
        arrOK[k++] = right[j++]
    }
    return (arrOK)
}

function mergeSort(array) {
    let length = array.length
    if (length <= 1) {
        return array
    } else {
        // 不停的分为等长的数组,然后,当数组长度为2的时候,能够完成上面的merge操作
        let num = Math.ceil(length / 2)
        let left = mergeSort(array.slice(0, num))
        let right = mergeSort(array.slice(num, length))
        return merge(left, right)
    }
}
// console.log(mergeSort([10, 9, 8, 7, 7, 6, 5, 11, 3]))





//快速排序
function QuickSort(array) {
    let length = array.length

    if (length <= 1) {
        return array
    } else {
        let small = []
        let large = []
        let base = array[0]
        let j = k = l = 0
        let res = []
        for (var i = 1; i < length; i++) {
            if (array[i] <= base) {
                small[j] = array[i]
                j++
            } else {
                large[k] = array[i]
                k++
            }
        }

        // small.push(base)
        // // console.log(small);
        // console.log(small.concat(large));
        return QuickSort(small).concat(base, QuickSort(large));
    }
}
// QuickUtil([10, 9, 8, 7, 7, 6, 5, 11, 3])



// console.log(QuickSort([10, 9, 8, 7, 7, 6, 5, 11, 3]))





//堆排序
/**
 * 
 * 堆:父节点大于子节点的完全二叉树
 * 使用一维数组可以表示完全二叉树
 *  第i个结点的父节点为(i-1)/2
 *  第i个结点的孩子结点为2i+1和2i+2
 */

/**
 * 
 * @param {string} tree 需要操作的数组 
 * @param {number} i    需要操作的结点
 */
function heapify(tree, i) {
    // console.log("heapify",tree)
    // i结点的两个子节点
    let c1 = 2 * i + 1
    let c2 = 2 * i + 2
    let max = i

    // 如果叶子结点大于根结点
    if (c1 < tree.length && tree[c1] > tree[max]) {
        // 下标交换
        max = c1
    }
    if (c2 < tree.length && tree[c2] > tree[max]) {
        max = c2
    }
    console.log("max",max)
    // 如果有改变了
    if (max != i) {
        // 将父节点和子节点三个中的最大值最为父节点
        let temp = tree[max]
        tree[max] = tree[i]
        tree[i] = temp
        console.log("tree",tree)
        // 以最大的子节点作为根结点进行遍历
        heapify(tree, max)
    }
}



function build_heap(tree) {
    let last_node = tree.length
    let parent = parseInt(last_node/2)-1
    for (let i = parent; i >= 0; i--) {
        heapify(tree, i)
    }
}

function heapSort(tree) {
    build_heap(tree)

    // console.log(tree)

    for (let i = tree.length-1; i >= 0; i--) {
        let temp = tree[i]
        tree[i] = tree[0]
        tree[0] = temp
        build_heap(tree, i)
    }
    
    return tree
}

// console.log(heapSort([4, 21, 6, 1, 2, 8, 3]))
