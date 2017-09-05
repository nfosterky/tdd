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
    console.log(this.head);

    this.length++;
  }

}
