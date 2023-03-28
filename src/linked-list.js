import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currNode = this.head;
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }

  remove(indexToRemove) {
    if (indexToRemove === 0) {
      this.head = this.head.next;
    } else {
      let currNode = this.head;
      let currIndex = 0; 
      while ((currIndex+1) <= indexToRemove) {
        if ((currIndex+1) === indexToRemove) {
          currNode.next = currNode.next.next;
          break; 
        }
        currNode = currNode.next;
        currIndex++;
      }
    }
  }

} 