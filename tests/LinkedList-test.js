import { expect } from 'chai';
import Node from '../scripts/Node'
import LinkedList from '../scripts/LinkedList'
import locus from 'locus';

describe('LINKED LIST', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should start with zero elements', () => {
    expect(list.length).to.eq(0);
  });

  it('should set its default head to null', () => {
    expect(list.head).to.eq(null);
  });

  describe('UNSHIFT', () => {
    it('should add items to front of list / head', () => {
      list.unshift('pizza');

      expect(list.length).to.equal(1)
      expect(list.head.data).to.equal('pizza')

      list.unshift('hamburger');
      expect(list.length).to.equal(2)
      expect(list.head.data).to.equal('hamburger')
      expect(list.head.next.data).to.equal('pizza')
    })
  })

  describe('SHIFT', () => {
    it('should remove items from the front of list / head', () => {
      let result = list.shift();

      // return null if list empty
      expect(result).to.equal(null);

      list.unshift('hamburger');
      list.unshift('duck');

      expect(list.length).to.equal(2)
      expect(list.head.data).to.equal('duck')

      // multiple items in list
      result = list.shift();

      expect(list.length).to.equal(1)
      expect(result.data).to.equal('duck')
      expect(list.head.data).to.equal('hamburger')
      //
      // // one item in list
      result = list.shift();

      expect(list.length).to.equal(0)
      expect(result.data).to.equal('hamburger')
      expect(list.head).to.equal(null)
    })
  })

  describe('PUSH', () => {
    it('should allow push of a single element to a list', () => {
      list.push('pizza');
      expect(list.head.data).to.eq('pizza');
    });

    it('should increment the length of the list', () => {
      list.push('pizza');
      expect(list.length).to.eq(1);
    });

    it('should increment the length count', () => {
      list.push('pizza');
      list.push('stromboli');
      list.push('mushroom');
      expect(list.length).to.eq(3);
    });

    it('should assign the head to the first element pushed', () => {
      expect(list.head).to.eq(null);

      list.push('pizza');
      expect(list.head.data).to.eq('pizza');

      list.push('stromboli');
      expect(list.head.data).to.eq('pizza');
    });

    it.skip('should attach the second element to the first element', () => {
      list.push('pizza');
      list.push('stromboli');
      list.push('calzone');
      expect(list.head.data).to.eq('pizza');
      expect(list.head.next.data).to.eq('stromboli');
      expect(list.head.next.next.data).to.eq('calzone');
    });

    it.skip('should attach nexts in sequential order', () => {
      list.push('pizza');
      list.push('stromboli');
      list.push('mushroom');
      list.push('peanutbutter');
      expect(list.head.data).to.eq('pizza');
      expect(list.head.next.data).to.eq('stromboli');
      expect(list.head.next.next.data).to.eq('mushroom');
      expect(list.head.next.next.next.data).to.eq('peanutbutter');
    });
  });

  describe('POP', () => {
    it('should return null if nothing in list', () => {
      expect(list.length).to.eq(0);
      expect(list.pop()).to.eq(null);
    });

    it('should not decrement the length if there are no nodes', () => {
      list.pop()
      expect(list.length).to.eq(0);
    });

    it('should change the length', () => {
      list.push('hello');

      expect(list.length).to.eq(1)

      let result = list.pop();

      expect(list.length).to.eq(0);
    });

    it('should set the list head to null', () => {
      list.push('hello');
      let result = list.pop();

      expect(list.head).to.eq(null);
    });

    it('should return the last element', () => {
      list.push('hello');
      const result = list.pop();

      expect(result.data).to.eq('hello');
    });

    it('should return the last element from the list', () => {
      list.push("hello");
      list.push("new");
      list.push("world");
      list.push("today");

      const output = list.pop();
      expect(output.data).to.eq('today');
    });

    it('should remove the last element from the list', () => {
        list.push("hello");
        list.push("world");
        list.push("today");

        const output = list.pop();
        expect(output.data).to.eq('today');
        expect(list.length).to.eq(2);

        const output2 = list.pop();
        expect(output2.data).to.eq('world');
        expect(output2.next).to.eq(null);
        expect(list.length).to.eq(1);

        const output3 = list.pop();
        expect(output3.data).to.eq('hello');
        expect(output3.next).to.eq(null);
        expect(list.length).to.eq(0);
      });
  });

  describe('FIND', () => {
    beforeEach(() => {
      list.push('oh');
      list.push('hello');
      list.push('world');
    });

    it('should return the node if it is found', () => {
      const result = list.find('hello');

      expect(result.data).to.eq('hello');
      expect(result.next.data).to.eq('world');
    });

    it('should return true the node if node in list', () => {
      const result = list.find('world');

      expect(result.data).to.eq('world');
      expect(result.next).to.eq(null);
    });

    it('should return null if node is missing', () => {
      const result = list.find("nope");

      expect(result).to.eq(null);
    });
  });

  describe('LAST NODE', () => {
    context('with several nodes', () => {
      beforeEach(() => {
        list.push('The');
        list.push('rain');
        list.push('in');
        list.push('Spain');
      });

      it.skip('finds the last node', () => {
        expect(list.getLast().data).to.eq('Spain');
      });
    });

    context('with one node', () => {
      beforeEach(() => {
        list.push('Ahoy!');
      });

      it.skip('finds the only node', () => {
        expect(list.getLast().data).to.eq('Ahoy!');
      });
    });

    context('with no nodes', () => {
      it.skip('returns null', () => {
        expect(list.getLast()).to.eq(null);
      });
    });
  });

  describe('DELETE', () => {
    it('deletes a solo node', () => {
      list.push('hello');
      list.delete('hello');
      expect(list.length).to.eq(0);
      expect(list.head).to.eq(null);
    });

    it('does not perform a delete when a node does not match', () => {
      list.push('hello');
      list.delete('goodbye');
      expect(list.length).to.eq(1);
      expect(list.head.data).to.eq('hello');
    });

    context('with more elements', () => {
      beforeEach(() => {
        list.push('hello');
        list.push('darkness');
        list.push('my');
        list.push('old');
        list.push('friend');
      });

      it('changes the list length', () => {
        expect(list.head.next.data).to.eq('darkness');
        expect(list.length).to.eq(5);

        // eval(locus)

        list.delete('friend');
        expect(list.length).to.eq(4);



        list.delete('my');
        expect(list.length).to.eq(3);

        list.delete('happy');
        expect(list.length).to.eq(3);
      });

      it.skip('resets the next property on the node before the deleted node', () => {
        expect(list.head.next.data).to.eq('darkness');

        list.delete('darkness');

        expect(list.head.next.data).to.eq('my');

        list.delete('my')

        expect(list.head.next.data).to.eq('old')
      });

      it.skip('resets the list.head if deleting the first node', () => {
        expect(list.head.data).to.eq('hello');
        list.delete('hello');
        expect(list.head.data).to.eq('darkness');
      });

    })
  });

  describe('TO ARRAY', () => {
    it.skip('converts to an array', () => {
      expect(list.toArray()).to.deep.equal([]);
    });

    context('when there are several elements', () => {
      beforeEach(() => {
        list.push('The');
        list.push('rain');
        list.push('in');
        list.push('Spain');
      });

      it.skip('can convert to an array', () => {
        expect(list.toArray()).to.deep.equal(['The', 'rain', 'in', 'Spain']);
      });
    });
  });

  describe('INCLUDES', () => {
    beforeEach(() => {
      list.push('The');
      list.push('rain');
      list.push('in');
      list.push('Spain');
    });

    it.skip('should return true if node is in list', () => {
      expect(list.include("rain")).to.eq(true);
    });

    it.skip('should return false if node is not in list', () => {
      expect(list.include("nope")).to.eq(false);
    });
  });

  describe('INDEX', () => {
    beforeEach(() => {
      list.push('oh');
      list.push('hello');
      list.push('world');
    });

    it.skip('should return expected indexes', () => {
      expect(list.index('oh')).to.eq(0);
      expect(list.index('world')).to.eq(2);
      expect(list.index('nope')).to.eq(null);
    });
  });

  describe('INSERT', () => {
    beforeEach(() => {
      list.push('dark');
      list.push('stormy');
    });

    it.skip('should insert nodes', () => {
      expect(list.length).to.eq(2);
      list.insert(1, 'and');
      list.insert(3, 'night');
      expect(list.length).to.eq(4);
      expect(list.toArray()).to.deep.equal(['dark', 'and', 'stormy', 'night']);
    });
  });

  describe('INSERT AFTER', () => {
    beforeEach(() => {
      list.push('dark');
      list.push('stormy');
    });

    it.skip('should insert nodes after other nodes', () => {
      expect(list.length).to.eq(2);
      list.insertAgfter('dark', 'and');
      list.insertAfter('stormy', 'night');
      expect(list.length).to.eq(4);
      expect(list.toArray()).to.deep.equal(['dark', 'and', 'stormy', 'night']);
    });
  });

  describe('DISTANCE', () => {
    beforeEach(() => {
      list.push("hello")
      list.push("pizza")
      list.push("world")
      list.push("today")
      list.push("tomorrow")
    });

    it.skip('should calculate distance between nodes', () => {
      expect(list.distance("hello", "today")).to.eq(3);
      expect(list.distance("pizza", "today")).to.eq(2);
      expect(list.distance("hello", "world")).to.eq(2);
      expect(list.distance("hello", "tomorrow")).to.eq(4);
      expect(list.distance("world", "today")).to.eq(1);
    });
  });
});
