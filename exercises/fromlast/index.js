// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    //set two variables to the starting point (head) of the lsit
    let slow = list.head;
    let fast = list.head;

    //set fast to be n places forward in the list
    while(n > 0){
        fast = fast.next;
        n--;
    }

    //while fast.next exists, advance slow and fast by 1.  When fast is at the end of the list, slow should be n places from fast & the end of the list
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    //return slow variable as it is n places from the end of the list.
    return slow;
}

module.exports = fromLast;
