/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    let res=false
    if(pRoot1!=null&&pRoot2!=null){
        if(pRoot1.val==pRoot2.val){
            res=tree1HaveTree2(pRoot1,pRoot2)
        }
        if(!res){
            res =HasSubtree(pRoot1.left,pRoot2)
        }
        if(!res){
            res =HasSubtree(pRoot1.right,pRoot2)
        }
    }
    return res
}



function tree1HaveTree2(t1,t2){
    if(t2==null){
        return true
    }
    if(t1==null){
        return false
    }
    if(t1.val!=t2.val){
        return false
    }

    return tree1HaveTree2(t1.left,t2.left)&&tree1HaveTree2(t1.right,t2.right)
}