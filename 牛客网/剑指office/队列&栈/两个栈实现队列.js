var stack1 = [],
    stack2 = []

function push(node) {
    stack1.push(node)
    
}

function pop() {
    let temp=""
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }
        temp = stack2.pop()
        while (stack2.length) {
            stack1.push(stack2.pop())
        } 
    }
    return temp
}



console.log(stack1,stack2)


push(1)
push(6)
push(3)

console.log(stack1,stack2)

pop()
pop()
console.log(stack1,stack2)


module.export = {
    push: push,
    pop: pop
}