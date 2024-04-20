function flatten(elements) {
    const flattenedArray = [];

    function flattenHelper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flattenHelper(arr[i]);
            } else {
                flattenedArray.push(arr[i]);
            }
        }
    }

    flattenHelper(elements);
    return flattenedArray;
}

module.exports = flatten;
