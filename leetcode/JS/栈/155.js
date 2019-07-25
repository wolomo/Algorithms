/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[]
    this.stackoo=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    
    if(this.stackoo[0]){
        let temp =this.stackoo.pop()
        if(x<temp){
            this.stackoo.push(temp)
            this.stackoo.push(x)
        }else{
            this.stackoo.push(temp)
        }
        this.stack.push(x)
    }else{
        this.stack.push(x)
        this.stackoo.push(x)
    }
    console.log(this.stack,this.stackoo)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    if(this.stack[0]&&this.stackoo[0]){
        let temp1 = this.stack.pop()
        let temp2 =this.stackoo.pop()
        if(temp1!=temp2){
            this.stackoo.push(temp2)
        }
    }

    console.log("pop" ,this.stack,this.stackoo)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let temp = this.stack.pop()
    this.stack.push(temp)

    console.log("top ",this.stack,this.stackoo)
    return temp
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let temp = this.stackoo.pop()
    this.stackoo.push(temp)
    return temp
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log( minStack.getMin()  )
minStack.pop()
console.log( minStack.top()     )
console.log( minStack.getMin()  )

