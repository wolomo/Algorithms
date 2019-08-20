function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 




function FindPath(root, expectNumber) {
    var result = [];
    if (root === null) {
        return result;
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result; 

}
function dfsFind(root, expectNumber, path, currentSum, result) {
    currentSum += root.val;

    path.push(root.val);

    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0)); 
    }
    if (root.left != null) {
        dfsFind(root.left, expectNumber, path, currentSum, result);
    }

    if (root.right != null) {
        dfsFind(root.right, expectNumber, path, currentSum, result);
    }

    path.pop();
}




let t1=new TreeNode(8)
t1.left=new TreeNode(6)
t1.left.left=new TreeNode(5)
t1.left.right=new TreeNode(7)
t1.right=new TreeNode(10)
t1.right.left=new TreeNode(9)
t1.right.right=new TreeNode(11)

// suoyoulujing(t1)

// console.log(res)
console.log(FindPath(t1,21))
// console.log(FindPath(t1,21))