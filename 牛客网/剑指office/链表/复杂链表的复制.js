function RandomListNode(x) {
    this.label = x;

    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    // write code here
    let res = new RandomListNode("head")
    let temp = res
    while (pHead) {
        console.log(pHead.label)
        let curr = pHead.next
        pHead.next=null
        temp.next=pHead
        temp=temp.next
        pHead=curr
    }
    return res.next
}

let a = new RandomListNode(1)
a.next = new RandomListNode(2)
a.next.next = new RandomListNode(3)

// let x = Clone(a)

// console.log(x)



function Clone1(pHead) {
    // write code here
    if(!pHead) return null
    let curr = pHead
    while(curr){
        let node = new RandomListNode(curr.label)
        node.next=curr.next
        curr.next=node
        curr=node.next
    }

    curr=pHead
    while(curr){
        let node = curr.next
        if(curr.random){
            //复制结点的random 指向的的是curr的random的下一个结点(复制节点)
            node.random=curr.random.next
        }
        curr=node.next
    }

    let pCloneHead = pHead.next
    let temp =null
    curr = pHead

    while(curr.next){
        temp=curr.next
        curr.next=temp.next
        curr=temp
    }
    return pCloneHead
}

let y = Clone1(a)

console.log(y)