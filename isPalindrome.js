// the following solution is using two pointers from two sides, 
// which guarantees O (n) time and O (1) space complexity

function isPalindrome(string) {
  let leftIndex = 0;
	let rightIndex = string.length - 1;
	while (leftIndex < rightIndex) {
		if (string[leftIndex] !== string[rightIndex]) {
			return false; 
		}
		leftIndex++;
		rightIndex--;
	}
	return true;
}

console.log(isPalindrome("abcdcba"));