// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    //set slow and faster trackers = to list.head
    let slow = list.head;
    let fast = list.head;

    //iterating while the 'next' and 'next.next' value of fast are not null.  If there is a null to fast.next & fast.next.next, then that means there is an end to the list and therefore it is not circular.
    while(fast.next && fast.next.next){
        //advance slow by 1
        slow = slow.next;
        //advance fast by 2
        fast = fast.next.next;

        //now check the nodes slow and fast are looking at and compare, if they are the same variable, then return true.
        if(slow === fast) {
            return true;
        }
    }

    //if the while loop is not true, then it's not circular and therefore false.
    return false;
}

module.exports = circular;
