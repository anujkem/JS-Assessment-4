const each = require('./each');

function testEach() {
    const items = [1, 2, 3, 4];
    each(items, (element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });

}

// Execute the test cases
testEach();
