
/**
 * 
 * @param {*} tree 
 * @param {*} n 
 * @param {*} i 
 */

function heapify(tree,n,i){
    let c1 = 2*i+1
    let c2 = 2*i+2
    let max = i

    if(i>=n){
        return
    }

    if(c1<=n&&tree[c1]>tree[max]){
        max =c1
    }

    if(c2<=n&&tree[c2]>tree[max]){
        max =c2
    }

    if(max!=i){
        swap(tree,max,i)
        heapify(tree,n,max)
    }

}


function buildHeap(tree,n){
    let last =n -1;
    let parent =Math.round((last-1)/2)
    for(let i =parent;i>=0;i--){
        heapify(tree,n,i)
    }
}

function heapSort(tree,n){
    buildHeap(tree)
    for(let i = n-1;i>=0;i--){
        swap(tree,i,0)
        heapify(tree,i,0)
    }
}


function swap(arr,i,j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j] =temp
}





let tree = [2,5,3,1,10,4]
let n =6
heapSort(tree,6)
console.log(tree)