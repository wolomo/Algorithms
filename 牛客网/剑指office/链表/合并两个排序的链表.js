function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{   
    let head={
        val:"head",
        next:null
    }
    let curr=head
    // write code here
    while(pHead1||pHead2){
        if(pHead2==null||(pHead1.val<=pHead2.val)){
            let temp =pHead1
            pHead1=pHead1.next
            temp.next=null
            curr.next=temp
            curr=curr.next
        }else if(pHead1==null||(pHead2.val<=pHead1.val)){
            let temp =pHead2
            pHead2=pHead2.next
            temp.next=null
            curr.next=temp
            curr=curr.next
        }
    }
    return head.next
}


let a = new ListNode(1)
a.next = new ListNode(5)
a.next.next = new ListNode(7)
a.next.next.next = new ListNode(9)


let b = new ListNode(2)
b.next = new ListNode(3)
b.next.next = new ListNode(4)
b.next.next.next = new ListNode(6)


let x =Merge(a,b)

while(x){
    console.log(x.val)
    x=x.next
}

