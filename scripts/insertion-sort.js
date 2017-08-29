const insertionSort = (array) => {

  for (let i = 0; i < array.length; i++) {
    for (var j = i-1; j >= 0; j--) {
      if (array[j+1] < array[j]) {
        [ array[j], array[j+1] ] = [array[j+1], array[j]]
      }
    }
  }

  return array
};

export default insertionSort
