function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Mirror(root)
{
    // write code here
    if(root==null){
        return root
    }

    // if(root.left==null&&root.right==null){
    //     return root
    // }

    if(root.left!=null||root.right!=null){
        let temp =root.left
        root.left=root.right
        root.right=temp
    }
    if(root.left!=null){
        Mirror(root.left)
    }

    if(root.right!=null){
        Mirror(root.right)
    }

    return root
}

let t1=new TreeNode(8)
t1.left=new TreeNode(6)
t1.left.left=new TreeNode(5)
t1.left.right=new TreeNode(7)
t1.right=new TreeNode(10)
t1.right.left=new TreeNode(9)
t1.right.right=new TreeNode(11)

// console.log(t1)


let k = Mirror(t1)
console.log(k)