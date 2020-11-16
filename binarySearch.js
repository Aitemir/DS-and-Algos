let array = [3, 4, 6, 8, 9, 14, 15, 19, 21];

function binarySearch(val, arr) {

    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (val === arr[middle]) {
            return middle;
        }
        if (val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return - 1;
}

console.log(binarySearch(6, array));

/*
let array1 = [3, 4, 6, 8, 9, 14, 15, 19, 21];

function binarySearch1(val, array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        middle = Math.floor((left + right)/2)

        if (val === array[middle]) return middle;

        if (val < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1; 
}

console.log(binarySearch1(21, array1));
*/