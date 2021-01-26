const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = true

function someBookWasReleaseOnThe80s() {
  // Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
    return books.some((book) => book.releaseYear <= 1989 || book.releaseYear >= 1980);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);