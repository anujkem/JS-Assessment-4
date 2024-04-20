const filter = require('./filter');

function testFilter() {
    const items = [1, 2, 3, 4, 5, 6];
    const evenNumbers = filter(items, element => element % 2 === 0);
    console.log("Even numbers:", evenNumbers);

}

// Execute the test cases
testFilter();
