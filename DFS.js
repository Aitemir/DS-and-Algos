// DFS is usually implemented through a recursion. The following examples are good examples of the classic DFS implementation:

// LeetCode 104. Maximum Depth of binary Tree:

var maxDepth = function(root, depth = 0) {
    
    let maxNodes = (node, depth) => {
        if (node === null) return depth;
    
        return Math.max(maxNodes(node.left, depth + 1), maxNodes(node.right, depth + 1));    
    }
    
    return maxNodes(root, 0);
};

// AlgoExpert.IO Max Depths (return sum of branches of for each depth): 

function nodeDepths(root, depth = 0) {
    if (root === null) return 0; 
      
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;