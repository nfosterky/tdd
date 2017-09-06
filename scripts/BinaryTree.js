import Node from './Node';

export default class BinaryTree {
  constructor () {
    this.root = null;
  }

  insert(data) {
    // check if node exists
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    let currentNode = this.root;

    // find destination of new node
    while(currentNode !== null) {

      // compare data with node data
      if (data <= currentNode.data) {

        // move to currentNode.left if it exists
        if (currentNode.left) {
          currentNode = currentNode.left;

        // else put new node there
        } else {
          currentNode.left = new Node(data);
          return;
        }

      } else {
        currentNode.right = new Node(data);
        return;
      }
    }


  }
}
