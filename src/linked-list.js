import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    this.head = newNode; 
  }
} 