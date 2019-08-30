function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    // write code here
    if(pHead==null||pHead.next==null){
        return pHead
    }

    let pre = pHead
    let curr =pHead.next
    let next=null 
    while(curr.next){
        next=curr.next
        
        if((pre.val == curr.val)&&(curr.val==next.val)){
            // console.log("111111111")
            // console.log(pre.val,curr.val,next.val)
            pre=curr
            curr=next
            pHead=pre
            // console.log(pre.val,curr.val,next.val)
        }else if((pre.val == curr.val)&&(curr.val!=next.val)){
            // console.log("222")
            // console.log(pre.val,curr.val,next.val)
            pHead=next
            pre=next
            curr=pre.next
            // console.log(pre.val,curr.val,next.val)
        }else if((pre.val != curr.val)&&(curr.val==next.val)){
            // console.log("333")
            // console.log(pre.val,curr.val,next.val)
            while(next.val==curr.val){
                next=next.next
            }
            // console.log(pre.val,curr.val,next.val)
            pre.next=next
            curr=next
           
        }else if((pre.val != curr.val)&&(curr.val!=next.val)){
            // console.log("444")
            // console.log(pre.val,curr.val,next.val)
            pre=curr
            curr=next
            // console.log(pre.val,curr.val,next.val)
        }
    }

    return pHead
}


let a1=new ListNode(1)
let a2=new ListNode(2)
let a3=new ListNode(3)
let a4=new ListNode(3)
let a5=new ListNode(4)
let a6=new ListNode(4)
let a7=new ListNode(5)
// let a8=new ListNode(6)
// let a9=new ListNode(7)
a1.next=a2
a2.next=a3
a3.next=a4
a4.next=a5
a5.next=a6
a6.next=a7
// a7.next=a8
// a8.next=a9
// a9.next=null

let x = deleteDuplication(a1)
console.log(x)
let y =""
while(x){
    y+=x.val
    x=x.next
}
console.log(y)