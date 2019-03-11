// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data) {
        // this.head = new Node(data, this.head);
        let node = new Node(data);  //create a new node with a data value (1)
        node.next = this.head;      // assign the next property of the node just created to equal the head of the list; so if this.head = 2, then 1.next -> 2
        this.head = node;           // reassign the head of the list to be the newly created node, this.head now is 1.
    }

    size(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast() {
        //check if there is anything in the list
        if(!this.head){
            return null;
        }
        //set current to head
        let current = this.head;

        //while current exists, 1. check if there is NOT a next property, if there isn't we're at the end of the list and can return current.
        while(current){
            if(!current.next){
                return current;
            }
            //keep traversing until we reach the end of the list
            current = current.next;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        let current = this.head;
        this.head = current.next;
    }

    removeLast() {
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let current = this.head.next;

        while(current.next) {
            previous = current
            current = current.next;
        }

        previous.next = null;
    }

    insertLast(data){
        let node = new Node(data);

        if(!this.head){
            node = this.head;
        }

        let current = this.head;

        while(current){
            if(!current.next){
                current.next = node;
                return current.next;
            }
            current = current.next;
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
      }

      removeAt(index){
          //if there's nothing in the list, return.
          if(!this.head){
              return;
          }

          //if trying to remove node at index 0, reassign head to head.next
          if(index === 0) {
              this.head = this.head.next;
              return;
          }

        //   let previous = this.getAt(index - 1);
        let counter = 0;
        let node =this.head;
        while(node){
            if(counter === index - 1){
                let previous = node;
                return previous;
            }
            counter++;
            node = node.next
        }
          if(!previous || !previous.next){
              return;
          }
          previous.next = previous.next.next;
      }

      insertAt(data, index) {
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            let node = new Node(data);
            node.next = this.head;
            this.head = node;
            return;
        }

        let previous = this.getAt(index - 1);
        let current = new Node(data, previous.next);
        previous.next = current;
      }
}


// const list = new LinkedList();
// list.head = new Node(10);
module.exports = { Node, LinkedList };
