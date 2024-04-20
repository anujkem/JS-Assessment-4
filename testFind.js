const find = require('./find');

function testFind() {
    const items = [1, 3, 5, 4, 7, 8];
    const firstEven = find(items, element => element % 2 === 0);
    console.log("First even number:", firstEven);

}

// Execute the test cases
testFind();
