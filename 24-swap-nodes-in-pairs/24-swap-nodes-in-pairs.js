/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummyList = new ListNode(null, head);

    let swapNodes = (listNode) => {
        if (listNode && listNode.next && listNode.next.next) {
            const first = listNode.next;
            const second = listNode.next.next;
            first.next = second.next;
            second.next = first;
            listNode.next = second;

            swapNodes(listNode.next.next);
        }
    }

    swapNodes(dummyList);

    return dummyList.next;
};