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

  pop() {
    if (this.length === 0) {
      return this.head;

    } else if (this.length === 1) {
      let popped = this.head;

      this.head = null;
      this.length--;

      return popped;

    } else {
      let prevNode = this.head;

      // find last node of current list
      while (prevNode.next.next !== null) {
        prevNode = prevNode.next;
      }

      let popped = prevNode.next;

      // set prevNode.next to null;
      prevNode.next = null;
      this.length--;

      return popped;
    }
  }

  find(data) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.data !== data) {
      currentNode = currentNode.next
    }

    return currentNode;
  }

  delete(data) {
    let currentNode = this.head;
    let prevNode;

    if (this.length === 1 && currentNode.data === data) {
      let popped = this.head;

      this.head = null;
      this.length--;

      return popped;
    }

    while (currentNode !== null && currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode !== null && currentNode.data === data) {
      this.length--;
      prevNode.next = null;
    }

  }
}
