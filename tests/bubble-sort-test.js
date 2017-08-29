import { assert } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

function randomArrayGenerator (count, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);
    numbers.push(randomNumber)
  }
  return numbers
}

describe('TDD with bubbleSort', () => {

  it('should be a function', () => {
    assert.equal(typeof bubbleSort, 'function');
  })

  it('should should sort an array of more than one number', () => {

    let newArray = randomArrayGenerator(5000, 10000);

    bubbleSort(newArray);
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[Math.floor(newArray.length / 2)] <= newArray[Math.floor(newArray.length / 2)+1], true);
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true);

  })

})
