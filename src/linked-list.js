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
    this.head = this.head.next;
  }

} 