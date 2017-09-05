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

}
