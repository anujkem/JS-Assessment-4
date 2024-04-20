const map = require('./map');

function testMap() {
    const items = [1, 2, 3, 4];
    const doubledArray = map(items, element => element * 2);
    console.log("Doubled array:", doubledArray);

}

// Execute the test cases
testMap();
