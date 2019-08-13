function ListNode(x) {
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k) {
    // write code here
    if (head == null) {
        return null
    } else {
        let p1 = head
        let num=0
        while (k > 0) {
            if(p1){
                p1 = p1.next
                k--
                num++
            }else{
                return null
            }

        }

        let p2 = p1
        let key = head
        while (p2) {
            key = key.next
            p2 = p2.next
            num++
        }

        return k>num?null:key
    }
}

let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)


console.log(FindKthToTail(a, 4))