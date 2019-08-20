 function TreeNode(x) {
     this.val = x;
     this.left = null;
     this.right = null;
 }

 function Convert(pRootOfTree) {
     if (!pRootOfTree) return null
     if (!pRootOfTree.left && !pRootOfTree.right) return pRootOfTree

     var left = Convert(pRootOfTree.left)
     var temp = left

     while (temp && temp.right) {
         temp = temp.right
     }
     if (temp) {
         temp.right = pRootOfTree
         pRootOfTree.left = temp
     }

     var right = Convert(pRootOfTree.right)
     if (right) {
         right.left = pRootOfTree
         pRootOfTree.right = right
     }

     return left ? left : pRootOfTree
 }

 function treeToLink(tree) {

 }


 let t1 = new TreeNode(6)
 t1.left = new TreeNode(4)
 t1.left.left = new TreeNode(3)
 t1.left.right = new TreeNode(5)
 t1.right = new TreeNode(8)
 t1.right.left = new TreeNode(7)
 t1.right.right = new TreeNode(9)
 console.log(t1)

 Convert(t1)