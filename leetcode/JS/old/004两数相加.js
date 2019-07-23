
/**
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 *  */

function ListNode(val){
    this.val = val;
    this.next =null
}


var l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next =new ListNode(3)


var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next =new ListNode(1)



function addTwoNumber(l1,l2){
    let res = new ListNode(-1)
    // 之所有再加一个 是因为记住了链表头
    let cur =res
    let carry =0
    // 如果l1 l2非空
    while(l1!=null ||l2!=null){
        // 判断l1,l2的值,非空则符合num1,2
        let num1 = l1==null?0:l1.val
        let num2 = l2==null?0:l2.val
        //将值和进位carry加起来
        let sum = num1+num2+carry
        carry = sum>=10?1:0
        cur.next = new ListNode(sum%10)
        cur=cur.next;
        l1 = l1?l1.next:l1
        l2 = l2?l2.next:l2
        
    }

    if(carry===1){
        cur.next = new ListNode(1)
    }
    // console.log(res.next)
    return res.next;
}

// console.log(l1)
// console.log(l2)
// console.log(addTwoNumber(l1,l2))





function text(l1,l2){

    let res = new ListNode(-1);
    let cur = res
    let flag = 0
    while(l1!=null||l2!=null){
        let num1 = l1.val?l1.val:0
        let num2 = l2.val?l2.val:0
        let sum = num1+num2+flag
        flag = sum>=10?1:0
        cur.next = new ListNode(sum%10)
        cur=cur.next
        l1 = l1?l1.next:l1
        l2 = l2?l2.next:l2
    }
    if(flag==1){
        cur.next = new ListNode(1)
    }

    return res.next
}

console.log(text(l1,l2))