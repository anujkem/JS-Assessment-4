function map(elements, cb) {
    const mappedArray = [];
    for (let i = 0; i < elements.length; i++) {
        mappedArray.push(cb(elements[i], i));
    }
    return mappedArray;
}

module.exports = map;
