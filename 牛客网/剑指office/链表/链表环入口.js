function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead==null||pHead.next==null){
        return  null
    }
    let slow =pHead.next
    let fast =slow.next

    while(fast!=slow){
        if(fast.next!=null&&fast.next.next!=null){
            fast=fast.next.next
            slow=slow.next
        }else{
            return null
        }
    }

    console.log(fast.val)

    fast =pHead
    while(fast!=slow){
        console.log(slow.val,fast.val)
        fast=fast.next
        slow=slow.next
    }
    return slow
}
let a1=new ListNode(1)
let a2=new ListNode(2)
let a3=new ListNode(3)
let a4=new ListNode(4)
let a5=new ListNode(5)
a1.next=a2
a2.next=a3
a3.next=a4
a4.next=a5
a5.next=a3


let x = EntryNodeOfLoop(a1)
console.log(x.val)