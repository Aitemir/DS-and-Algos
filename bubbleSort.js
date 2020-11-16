function bubbleSort(array) {
    let isSorted = false;
      let counter = 0;
      while (!isSorted) {
          // tentatevely assign isSorted to true
          isSorted = true;
          // we know for a fact that the last number in the array at the end of passthrough 
          // would make the last number the highest, hence we put - counter in the for loop
          for (let i = 0; i < array.length - 1 - counter; i++) {
              if (array[i] > array[i + 1]) {
                  swap(i, i+1, array);
                  isSorted = false;
              }
          }
          counter++;
      }
      return array;
  }
  
  // swap function is not necessary to implement, it only makes the code cleaner
function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(array));