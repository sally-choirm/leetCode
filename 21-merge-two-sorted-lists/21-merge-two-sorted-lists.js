/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   let pre = new ListNode();
    let cur =pre
    while(list1 && list2){
        if(list1.val<=list2.val){
            cur.next = new ListNode(list1.val);
            list1 = list1.next;
        }else {
            cur.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        cur = cur.next;
        console.log(pre);
    }
    cur.next = list1 || list2;
    return pre.next
};