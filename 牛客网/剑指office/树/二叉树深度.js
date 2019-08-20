/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth1(pRoot)
{
    // write code here
    if(!pRoot) return 0
    if(!pRoot.left&&!pRoot.right) return 1

    let left = TreeDepth(pRoot.left)
    let right =TreeDepth(pRoot.right)

    return Math.max(left,right)+1
}


function TreeDepth(pRoot)
{
    if(!pRoot) return 0
    let queue =[]
    let count=0
    let countFlag=1
    queue.push(pRoot)
    while(queue.length){
        let node = queue.shift()
        count++
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }

        if(count==countFlag){
            countFlag ==queue.length
            count=0
            depth++
        }
    }

}