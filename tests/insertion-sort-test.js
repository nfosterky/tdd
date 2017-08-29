import { assert } from 'chai';
import insertionSort from '../scripts/insertion-sort'


function randomArrayGenerator (count, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);
    numbers.push(randomNumber)
  }
  return numbers
}

describe('TDD with insertionSort', () => {

  it('should be a function', () => {
    assert.equal(typeof insertionSort, 'function');
  })

  it('should should sort an array of more than one number', () => {

    let newArray = randomArrayGenerator(10000, 10000);
    insertionSort(newArray)
    assert.equal(newArray[0] <= newArray[1], true);
    assert.equal(newArray[Math.floor(newArray.length / 2)] <= newArray[Math.floor(newArray.length / 2)+1], true);
    assert.equal(newArray[newArray.length - 1] >= newArray[newArray.length - 2], true);

  })

})
