/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackLeft =[]
    this.stackRight =[]
};



MyQueue.prototype.popopop = function(x) {
    console.log(x)
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackRight.push(x)
    console.log(this.stackRight)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stackLeft[0]){
        return  this.stackLeft.pop()
    }else{
        for(let i=0;i<this.stackRight.length;i++) {
            this.stackLeft.push(this.stackRight.pop()) 
        }


        return  this.stackLeft.pop()
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if(this.stackLeft[0]){
        let temp = this.stackLeft.pop();
        this.stackLeft.push(temp)
        return  temp
    }else{
        for(let i=0;i<this.stackRight.length;i++) {
            this.stackLeft.push(this.stackRight.pop()) 
        }
        let temp = this.stackLeft.pop();
        this.stackLeft.push(temp)
        return  temp
    }


};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if((!this.stackLeft[0])&&(!this.stackRight[0])){
        return true
    }else{
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */



 let kk = new MyQueue()
kk.push(1)
kk.push(2)
console.log( kk.peek())
console.log( kk.pop())
console.log( kk.empty())
// console.log( kk.pop())