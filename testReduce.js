const reduce = require('./reduce');

function testReduce() {
    const items = [1, 2, 3, 4];
    const sum = reduce(items, (accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Sum of elements:", sum);


}

// Execute the test cases
testReduce();
