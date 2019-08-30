/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    // write code here
    return getDepth(pRoot)!== -1
}

function getDepth(pRoot) {
    if (pRoot == null) return 0
    let left = getDepth(pRoot.left)
    if (left === -1) return -1
    let right = getDepth(pRoot.right)
    if(right=== -1) return -1
    return Math.abs(right-left)>1?-1:Math.max(right+1,left+1)
}