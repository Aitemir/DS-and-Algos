let array = [3, 4, 6, 8, 9, 14, 15, 19, 21];

function binarySearch(val, arr) {

    let lower = 0;
    let upper = arr.length - 1;
    
    while (lower <= upper) {
        const middle = Math.floor((lower + upper) / 2)
        if (val === arr[middle]) {
            return middle;
        }
        if (val < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
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