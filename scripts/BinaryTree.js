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

  find(data) {
    let currentNode = this.root;

    let direction = currentNode.data <= data ? 'left' : 'right';

    while (currentNode[direction] && currentNode.data !== data) {
      currentNode = currentNode[direction];

      direction = currentNode.data <= data ? 'left' : 'right';

    }

    return currentNode.data === data ? currentNode : null;
  }

  getSum() {
    let nodeList = [ this.root ];
    let sum = 0;

    if (!this.root) {
      return null;
    }

    if (!this.root.left && !this.root.right) {
      return this.root.data;
    }

    for (var i = 0; i < nodeList.length; i++) {
      sum += nodeList[i].data;

      if (nodeList[i].left) {
        nodeList.push(nodeList[i].left)
      }

      if (nodeList[i].right) {
        nodeList.push(nodeList[i].right)
      }
    }

    return sum;
  }

  getSum2(node = this.root) {
    if (node === null) {
      return 0;
    }

    return node.data + this.getSum2(node.left) + this.getSum2(node.right);
  }

}
