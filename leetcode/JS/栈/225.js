/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queueleft=[]
    this.queueright=[]
};  

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while(this.queueleft[0]){
        this.queueright.push(this.queueleft.shift())
    }
    this.queueleft.push(x)
    while(this.queueright[0]){
        this.queueleft.push(this.queueright.shift())
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queueleft.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    let temp = this.queueleft.pop()
    while(this.queueleft[0]){
        this.queueright.push(this.queueleft.shift())
    }
    this.queueleft.push(temp)
    while(this.queueright[0]){
        this.queueleft.push(this.queueright.shift())
    }
    return temp
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if((!this.queueleft[0])&&(!this.queueright[0])){
        return true
    }else{
        return false
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 var obj = new MyStack()
 obj.push("12")
 obj.push("13")
 var param_2 = obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.empty()


 console.log(param_2,param_3,param_4)