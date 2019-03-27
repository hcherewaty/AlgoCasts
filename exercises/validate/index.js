// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //move to the left, when we do so we're concerned about the max value
    //if we have a max value, and the current node.data is greater (out of bounds of that value), then there's something wrong with the tree
    //first time through, max is 10 and node.data is 0, so don't enter this case.
    if(max !== null && node.data > max) {
        return false;
    }

    if(min !== null && node.data < min){
        return false;
    }

    //first time around:  if(0 && !validate(0, min=null, 10))
    //going to the left.  if calling validate with node.left and bounds returns false, then return false
    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}


/*

function validate(node) {
    let result = [];

    function _walk(node){
        if(node.left) { _walk(node.left); }
        
        result.push(node.data);

        if(node.right) { _walk(node.right); }
    }

    _walk(node);

    for(let i = 0; i < result.length; i++) {
        if(result[i] > result[i + 1]){
            return false;
        }
    }
    return true;
}

*/

module.exports = validate;
