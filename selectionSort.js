function selectionSort(array) {
    let currentIndex = 0; // first index in the unsorted sublist
      while (currentIndex < array.length -1) {
          let smallestIndex = currentIndex;
          for (let i = currentIndex + 1; i < array.length; i++) {
              if (array[smallestIndex] > array[i]) {
                  smallestIndex = i; 
              }
          }
          swap(currentIndex, smallestIndex, array);
          currentIndex++;
      }
      return array;
  }
  
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(selectionSort(array));


// second approach with two for loops: 

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
          let iMin = i;
          for (let j = i + 1; j < array.length; j++) {
              if (array[j] < array[iMin]) {
                  iMin = j;
              }
          }
          if (array[i] !== array[iMin]) {
                  let left = array[i];
                  array[i] = array[iMin];
                  array[iMin] = left;
          }
      }
      return array;
  }