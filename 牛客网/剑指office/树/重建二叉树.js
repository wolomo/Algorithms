/**
 * 
 * 前序遍历DLR中,第一个为根结点
 *  以DLR[0]为界限分割中序遍历LDR[]
 *      
 * 
 * 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(vin.length==0){
        return null
    }
    let left_pre=[],right_pre=[],left_vin=[],right_vin=[]
    let root=0
    let treeHead = new TreeNode(pre[0])
    for(let x= 0;x<vin.length;x++){
        if(pre[0]==vin[x]){
            root=x
            break;
        }
    }
    for(let y=0;y<root;y++){
        left_pre.push(pre[y+1])
        left_vin.push(vin[y])
    }
    for(let z=root+1;z<vin.length;z++){
        right_pre.push(pre[z])
        right_vin.push(vin[z])
    }

    treeHead.left=reConstructBinaryTree(left_pre,left_vin)
    treeHead.right=reConstructBinaryTree(right_pre,right_vin)

    return treeHead
}


function show(curr){
    console.log(curr.val)
    if(curr.left){
        show(curr.left)
    }
    if(curr.right){
        show(curr.right)
    }
}

function show2(curr){
        
    if(curr.left){
        show2(curr.left)
    }
    console.log(curr.val)
    if(curr.right){
        show2(curr.right)
    }
}

show(reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]))
show2(reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]))