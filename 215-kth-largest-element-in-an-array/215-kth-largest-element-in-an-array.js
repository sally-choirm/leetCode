/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MaxQueue{
    constructor(){
        this.heap=[null];
    }
       push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] <= value) {
          const temp = this.heap[parentIndex];
          this.heap[parentIndex] = value;
          this.heap[currentIndex] = temp;
          currentIndex = parentIndex;
          parentIndex = Math.floor(currentIndex / 2);
        }
   }
}
var findKthLargest = function(nums, k) {
    // let queue = new MaxQueue();
    // for(let num of nums){
    //     queue.push(num);
    // }
    // console.log(queue.heap);
    // return queue.heap[k];
     let pq = new MinPriorityQueue();

    for (let x of nums) {
        pq.enqueue(x);
        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.front().element;
    
};