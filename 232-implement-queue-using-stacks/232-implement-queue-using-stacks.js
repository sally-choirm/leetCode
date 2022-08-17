
var MyQueue = function() {
    this.heap=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    console.log(x);
    this.heap.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let value = this.heap.shift();
    return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   return this.heap[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.heap.length===0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */