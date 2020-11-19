// BFS is usually implemented with the help of a queue. The following examples are good examples of the classic BFS implementation:

// LeetCode 107. Binary Tree Level Order Traversal II:
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

var levelOrderBottom = function(root) {
    
    let result = [];
    
    if (root === null) {
        return result; 
    }
    
    let queue = [];
    
    queue.push(root);
    
    while (queue.length !== 0) {
        let nodeCount = queue.length;
        let rowResult = [];
        
        while (nodeCount > 0) {
            
            let currentNode = queue.shift();
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            rowResult.push(currentNode.val);
            nodeCount--; 
            
        }
        result.unshift(rowResult); 
    }
    return result;
};

// LeetCode 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    let queue = [];
    queue.push(root);
    let depth = 0;
    
    while(queue.length !==0) {
        let numberOfNodes = queue.length;    

        while(numberOfNodes > 0) {
            let currentNode = queue.shift();
            
            if (currentNode.left === null && currentNode.right === null) {
                depth++ 
                return depth;
            }
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            } 
            
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            } 
            numberOfNodes--;
        }
        depth++;
    }
};