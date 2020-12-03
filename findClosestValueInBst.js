// AlgoExpert.IO Find Closest Value in BST:

// Recursive Approach: 

function findClosestValueInBst(tree, target) {
	return findClosestValueinBstIteration(tree, target, tree.value);
}

function findClosestValueinBstIteration(tree, target, closest) {
	if (tree === null) { return closest; } 
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	
	if (target < tree.value) {
		return findClosestValueinBstIteration(tree.left, target, closest);
	} else if (target > tree.value) {
			return findClosestValueinBstIteration(tree.right, target, closest);
	} else {
			return closest;
		}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Iterative Approach: 

function findClosestValueInBst(tree, target) {
	return findClosestValueHelpers(tree, target, tree.value);
}

function findClosestValueHelpers(tree, target, closest) {
	let currentNode = tree; 
	while (currentNode !== null) {
		if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
			closest = currentNode.value;		
		} 
		if (target < currentNode.value) {
			currentNode = currentNode.left; 
		} else if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else {
			break;
		}
	} 
	return closest; 
}