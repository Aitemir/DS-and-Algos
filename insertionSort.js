function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
		let j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j--;
		}
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(insertionSort(array));