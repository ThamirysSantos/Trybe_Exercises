const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

function smallerName() {
  let nameBook;
  // Retorne o nome do livro de menor nome.
  books.forEach((book) => {
    !nameBook || book.name.length < nameBook.length ? nameBook = book.name : false;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
assert.strictEqual(smallerName(), 'Duna');