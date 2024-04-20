const flatten = require('./flatten');

function testFlatten() {
    const nestedArray = [1, [2], [3, [[4]]]];
    const flattened = flatten(nestedArray);
    console.log("Flattened array:", flattened);

}

// Execute the test cases
testFlatten();
