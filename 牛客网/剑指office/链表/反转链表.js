function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    let pre=null
    let next=null
    while(pHead!=null){
        next=pHead.next
        pHead.next=pre
        pre=pHead
        pHead=next
    }
}