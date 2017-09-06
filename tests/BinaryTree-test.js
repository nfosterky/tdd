import { expect } from 'chai';
import BinaryTree from '../scripts/BinaryTree';
import locus from 'locus'

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  it('should have a root node defaulted to null', () => {
    expect(tree.root).to.equal(null);
  });

  describe('insert', () => {
    it('should be able to add a node to the Tree', () => {
      tree.insert(20);

      expect(tree.root.data).to.equal(20);
    });

    it('should move smaller data to the left', () => {
      tree.insert(20);
      tree.insert(5);

      expect(tree.root.left.data).to.equal(5);
    });

    it('should move larger data to the right', () => {
      tree.insert(20);
      tree.insert(30);

      expect(tree.root.data).to.equal(20);
      expect(tree.root.right.data).to.equal(30);
    });

    it('should add data equal to the rootNode to the left', () => {
      tree.insert(20);
      tree.insert(20);

      expect(tree.root.left.data).to.equal(20);
    });

    it('should continue adding smaller data to the left down the tree', () => {
      tree.insert(20);
      tree.insert(10);
      tree.insert(5);

      expect(tree.root.left.left.data).to.equal(5);
    });

    it('should continue adding larger data to the right down the tree', () => {
      tree.insert(20);
      tree.insert(30);
      tree.insert(35);
      tree.insert(32);
      tree.insert(25);

      expect(tree.root.right.right.data).to.equal(35);
      expect(tree.root.right.right.left.data).to.equal(32);
      expect(tree.root.right.left.data).to.equal(25);
    });

  });

  describe('min and max', () => {

    it('min should return null if no nodes exist', () => {
      let tree = new BinaryTree();

      expect(tree.min()).to.equal(null);
    });

    it('max should return null if no nodes exist', () => {
      let tree = new BinaryTree();

      expect(tree.max()).to.equal(null);
    });

    beforeEach(() => {
      tree.insert(4);
      tree.insert(6);
      tree.insert(7);
      tree.insert(2);
      tree.insert(3);
      tree.insert(5);
      tree.insert(1);
    });

    it('should find the min value', () => {
      expect(tree.min()).to.equal(1);
    });

    it('should find the max value', () => {
      expect(tree.max()).to.equal(7);
    });
  });

  describe('find', () => {

    beforeEach(() => {
      tree.insert(4);
      tree.insert(6);
      tree.insert(7);
      tree.insert(2);
      tree.insert(3);
      tree.insert(5);
      tree.insert(1);
    });


    it.skip('should find a match if node exists', () => {

    });

    it('should return null if no match is found', () => {
      let node = tree.find(8);

      expect(node).to.equal(null);
    });

    it('should be able to find the root', () => {
      let node = tree.find(4);

      expect(node).to.equal(tree.root);
    });

    it('should be able to find results to the immediate left (2)', () => {
      // eval(locus)
      let node = tree.find(2);

      expect(node).to.equal(tree.root.left);
    });

    it('should be able to find results to the far left (1)', () => {
      let node = tree.find(1);

      expect(node).to.equal(tree.root.left.left);
    });

    it('should be able to find results to the immediate right (6)', () => {
      let node = tree.find(6);

      expect(node).to.equal(tree.root.right);
    });

    it('should be able to find nested results (5 and 3)', () =>  {
      let node = tree.find(5);

      expect(node).to.equal(tree.root.right.left)
    });

  });

  describe('getCount', () => {});

  describe('toArray', () => {
    it.skip('should return an empty array if no nodes exist', () => {
      let tree = new BinaryTree();

      expect(tree.toArray()).to.deep.equal([]);
    });

    it.skip('should return data from the tree into an array, starting with the root, then all left values, then all right', () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(6);
      tree.insert(7);
      tree.insert(4);

      expect(tree.toArray()).to.deep.equal([3, 4, 5, 6, 7]);
    });
  });

  describe('getSum', () => {
    it('should return null if no elements', () => {
      let tree = new BinaryTree();

      expect(tree.getSum()).to.equal(null);
    });

    it('should return sum for one node', () => {
      let tree = new BinaryTree();

      tree.insert(10);

      expect(tree.getSum()).to.equal(10);
    })

    it('should return sum for one node', () => {
      let tree = new BinaryTree();

      tree.insert(20);

      expect(tree.getSum()).to.equal(20);
    })

    it('should return sum for multiple node datas', () => {
      let tree = new BinaryTree();

      tree.insert(20);
      tree.insert(5);
      tree.insert(25);
      tree.insert(50);

      expect(tree.getSum()).to.equal(100);
    })

    it('should return sum for multiple node datas', () => {
      let tree = new BinaryTree();

      tree.insert(20);
      tree.insert(5);
      tree.insert(25);
      tree.insert(50);

      expect(tree.getSum2()).to.equal(100);
    })
  })

  // describe('getSum', () => {
  //   it('should return 0, if empty', () => {
  //     let tree = new BinaryTree();
  //
  //     expect(tree.getSum()).to.equal(0);
  //   })
  //
  //   it('should return sum if only one item', () => {
  //     let tree = new BinaryTree();
  //
  //     tree.insert(10);
  //
  //     expect(tree.getSum()).to.equal(10);
  //   })
  //
  //   it('should return sum with several items', () => {
  //     let tree = new BinaryTree();
  //
  //     tree.insert(10);
  //     tree.insert(5);
  //     tree.insert(15);
  //     tree.insert(20);
  //
  //     expect(tree.getSum2()).to.equal(50);
  //   })
  // });

  describe('delete', () => {
    beforeEach(() => {
       /*
        *        4
        *      /   \
        *     2    6
        *    / \  / \
        *   1  3 5  7
        */
      tree.insert(4);
      tree.insert(6);
      tree.insert(7);
      tree.insert(2);
      tree.insert(3);
      tree.insert(5);
      tree.insert(1);
    });

    it.skip('should delete node with no children', () => {
      let node = tree.find(1);

      expect(tree.root.left.left).to.equal(node);

      expect(tree.delete(1)).to.equal(node);

      expect(tree.root.left.left).to.equal(null);
    })

    it.skip('should delete node with one child', () => {
      let node = tree.find(1);

      expect(tree.root.left.left).to.equal(node);

      expect(tree.delete(1)).to.equal(node);

      expect(tree.root.left.left).to.equal(null);

      tree.insert(8);

      expect(tree.root.right.right.right.data).to.equal(8)
      expect(tree.root.right.right.data).to.equal(7)
      tree.delete(7)
      expect(tree.root.right.right.data).to.equal(8)
      expect(tree.root.right.right.right).to.equal(null)
    })

    it.skip('should delete node with two children', () => {
      let node = tree.find(7);

      expect(tree.root.right.right).to.equal(node);

      tree.delete(6);
      console.log(JSON.stringify(tree, null, 4));
      node = tree.find(7);
      expect(tree.root.right).to.equal(node);

      // expect(tree.root.right.right).to.equal(null);
      // expect(tree.root.right.left.data).to.equal(5);
    })
  })

  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });

  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });
});
