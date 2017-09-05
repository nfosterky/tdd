import Node from './Node';

export default class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  unshift (data) {
    let node = new Node(data);

    node.next = this.head;
    this.head = node;

    this.length++;
  }

  shift() {
    const shifted = this.head;

    if (this.length === 0) {
      return shifted;
    }

    this.length--;

    this.head = this.head.next;

    return shifted;
  }

  push(data) {
    let newNode = new Node(data);

    // if list is empty set new node to list.head
    if (this.head === null) {
      this.head = newNode;

    } else {
      let currentNode = this.head;

      // find last node of current list
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      // set lastNode.next === new node
      currentNode.next = newNode;
    }

    this.length++;

    return this.length
  }

}
