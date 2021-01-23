const assert = require('assert');
// Escreva a função wordLengths para passar nos testes já implementados:
function wordLengths(stringArray) {
    const lengthArray = [];
    for(let index = 0; index < stringArray.length; index++) {
        lengthArray.push(stringArray[index].length);
    };
    return lengthArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);