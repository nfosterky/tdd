import Node from './Node';

export default class BinaryTree {
  constructor () {
    this.root = null;
  }

  insert(data) {
    let nodeToInsert = new Node(data);

    // check if node exists
    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }

    let currentNode = this.root;

    // find destination of new node
    while(currentNode !== null) {
      let direction;

      // compare data with node data
      direction = data <= currentNode.data ? 'left' : 'right';

      // if node exists, move to node
      if (currentNode[direction]) {
        currentNode = currentNode[direction];

      // else put new node there
      } else {
        currentNode[direction] = nodeToInsert;
        return;
      }

    }
  }

  min() {
    // if (!this.root)
    if (this.root === null) {
      return null;
    }

    // find left most node and return it
    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    // find right most node and return it
    if (this.root === null) {
      return null;
    }

    // find left most node and return it
    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  findDirection(a, b) {
    return a <= b ? 'right' : 'left'
  }

  find(data) {
    let currentNode = this.root;

    // Compare given data and current node's data
    // Determine direction based on comparison
    let direction = this.findDirection(currentNode.data, data)

    // console.log('direction: ', direction);

    // Check to see if node exists in the direction we want
    while (currentNode[direction] !== null && data !== currentNode.data) {
    // If it exists, make that the current node
      currentNode = currentNode[direction];

      // Compare again for direction
      direction = this.findDirection(currentNode.data, data);
    }

    return currentNode.data === data ? currentNode : null;
  }









}
