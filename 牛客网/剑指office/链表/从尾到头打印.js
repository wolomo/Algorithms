function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    // write code here
    let arrayList = []
    let current=head
     while(current){
         arrayList.unshift(current.val)
         current =current.next
     }
     return arrayList
}

let node =new ListNode(0)
let current =node
for(let i =0 ;i<4;i++){
    let temp = new ListNode(i)
    current.next=temp
    current=current.next
}

console.log(printListFromTailToHead(node))