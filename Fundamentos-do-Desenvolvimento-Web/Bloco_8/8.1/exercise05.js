const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = false

function everyoneWasBornOnSecXX() {
  // Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
  return books.every((book) => book.author.birthYear > 1901);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);