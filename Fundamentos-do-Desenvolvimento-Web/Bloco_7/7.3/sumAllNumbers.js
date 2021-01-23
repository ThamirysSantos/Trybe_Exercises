const assert = require('assert');
// Escreva a função sumAllNumbers para passar nos testes já implementados:
function sumAllNumbers(numbersArray) {
    let sum = 0;
    for(index in numbersArray) {
        sum += numbersArray[index];
    };
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);