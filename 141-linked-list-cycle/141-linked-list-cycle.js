/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head===null) return false;
   
    let tor=head, rabit=head;
    while(rabit && rabit.next){
        tor=tor.next;
        rabit=rabit.next.next;
        if(tor==rabit) return true;
    }
    return false;
};